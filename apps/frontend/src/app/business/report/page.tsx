"use client";

import React, { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SearchSchema, searchSchema } from "@/app/commons/types/types";
import { zodResolver } from "@hookform/resolvers/zod";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Report() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchSchema>({
    mode: "onBlur",
    resolver: zodResolver(searchSchema),
  });
  const [keyword, setKeyword] = useState<string | null>(null);
  console.log(keyword);

  const {
    data: reports,
    error,
    isLoading,
  } = useSWR(
    () =>
      `${process.env.NEXT_PUBLIC_API_REVIEWS_URL}/report/?keyword=` + keyword,
    fetcher
  );

  if (isLoading) return <div>ローディング中...</div>;
  if (error) return console.log(error);

  const onSubmit = async (data: SearchSchema) => {
    setKeyword(data.search);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-4">クチコミの分析</h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md mx-auto mb-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center space-x-2"
          >
            <input
              {...register("search")}
              type="search"
              id="search"
              className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="（例）リムジン"
            />
            {errors.search && (
              <p className="text-red-500 text-xs mb-2">
                {errors.search.message}
              </p>
            )}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-auto whitespace-nowrap dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
            >
              レポート作成
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row w-10/12 justify-between mt-4">
          <div className="mb-4 w-full md:w-3/5 px-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">ワードクラウド</h2>
              <div className="w-full">
                {reports && (
                  <Image
                    src={`data:image/png;base64,${reports.wordcloud}`}
                    alt="Word Cloud"
                    width={500}
                    height={300}
                    style={{
                      width: "100%",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="mb-4 w-full md:w-2/5 px-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">年齢別グラフ</h2>
              <div className="w-full">
                <Image
                  src={"/result_age_count.png"}
                  alt="Age Count Graph"
                  width={500}
                  height={300}
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-9/12 justify-between mt-4">
          <div className="mb-4 w-full px-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-xl font-semibold mb-4">AIによる分析</h2>
              <textarea
                id="ai"
                name="ai"
                className="block w-full h-32 text-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
