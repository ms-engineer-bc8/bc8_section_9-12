"use server"

import { S3Client } from "@aws-sdk/client-s3"
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

const region = process.env.NEXT_PUBLIC_REGION;
const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
const bucket = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;

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
            Key: `${Date.now()}-${file.name}`
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
            throw new Error("Failed to upload file");
        }

        return { success: true, message: "File uploaded successfully" };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to upload file" };
    }
}