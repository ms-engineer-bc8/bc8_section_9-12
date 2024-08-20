import { useState } from "react";
import { uploadFile } from "@/app/commons/images/s3/imageActions";

export default function FileUploadForm() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            setMessage("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        const result = await uploadFile(formData);
        setMessage(result.message);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-700"
                >
                    ファイルを選択
                </label>
                <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="mt-1 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                />
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                アップロード
            </button>
            {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
        </form>
    );
}
