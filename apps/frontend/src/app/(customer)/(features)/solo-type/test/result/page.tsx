"use client";

import React from "react";

const SoloTypeResult = () => {
    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                あなたのソロ活タイプは
            </h2>
            <div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    アプリに戻る
                </button>
            </div>
        </div>
    );
};

export default SoloTypeResult;
