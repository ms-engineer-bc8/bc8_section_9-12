"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, authSchema } from "@/app/commons/types/types";
import { useAuth } from "@/app/commons/auth/firebaseConfig";

export default function CustomerLogIn() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchema>({
    mode: "onBlur",
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    const result = await signIn(email, password);
    if (result === "error"){
      console.log("Sign-in failed.");
      toast.error("メールアドレスまたはパスワードが間違っています。");
    } else {
      console.log("ID Token:", result);
      toast.success("ログイン成功！");  
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">ログイン</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            メールアドレス
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="abc@test.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            パスワード
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="●●●●●●●●"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            ログインする
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">アカウントがない場合</p>
        <Link href="/register">
          <button className="mt-2 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            新規登録する
          </button>
        </Link>
      </div>
    </div>
  );
}
