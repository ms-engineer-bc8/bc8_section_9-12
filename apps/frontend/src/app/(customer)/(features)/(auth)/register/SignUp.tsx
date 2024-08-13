"use client";
import React, { useState } from "react";

export default function SignUp(): React.JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");

    return (
        <div className="container flex justify-center">
            <h2 className="">ユーザ登録</h2>
            <div className="m-2">
                <h3 className="text-lg font-semibold">メールアドレス</h3>
                <textarea
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="abc@test.com"
                ></textarea>
                <h3 className="text-lg font-semibold">パスワード</h3>
                <textarea
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="●●●●●●●●"
                ></textarea>
                <h3 className="text-lg font-semibold">ニックネーム</h3>
                <textarea
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="●●●●●●●●"
                ></textarea>
            </div>
        </div>
    );
}
