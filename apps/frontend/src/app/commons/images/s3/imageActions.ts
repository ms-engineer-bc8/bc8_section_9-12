"use server"

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const region = process.env.NEXT_PUBLIC_REGION;
const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

const LONG_EXPIRY = 10 * 365 * 24 * 60 * 60;

export async function uploadFile(formData: FormData) {
    try {
        const file = formData.get("file") as File;
        if (!file) {
            throw new Error("No file provided");
        }

        const client = new S3Client({
            region,
            credentials: {
                accessKeyId: accessKeyId!,
                secretAccessKey: secretAccessKey!
            }
        });

        const { url, fields } = await createPresignedPost(client, {
            Bucket: bucket!,
            Key: `${file.name}`,
            Expires: LONG_EXPIRY
        });

        const formDataS3 = new FormData();
        Object.entries(fields).forEach(([key, value]) => {
            formDataS3.append(key, value);
        });
        formDataS3.append("file", file);

        const response = await fetch(url, {
            method: "POST",
            body: formDataS3
        });

        if (!response.ok) {
            throw new Error("失敗");
        }

        const command = new GetObjectCommand({
            Bucket: bucket!,
            Key: `${file.name}`
        });
        const presignedUrl = await getSignedUrl(client, command, { expiresIn: LONG_EXPIRY });

        return { success: true, message: "成功", url: presignedUrl };
    } catch (error) {
        console.error(error);
        return { success: false, message: "失敗" };
    }
};