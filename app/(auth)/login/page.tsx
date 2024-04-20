"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LogoPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/");
    }
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center gap-5 text-lg antialiased">
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="flex flex-col gap-5 py-5 w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-md">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="you@email.com"
            className="p-2 border-2 border-gray-300 rounded-md
            "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="password"
            className="p-2 border-2 border-gray-300 rounded-md
            "
          />
        </div>
        <span className="text-blue-600">
          <Link href="/">Forgot Password?</Link>
        </span>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md border-2 border-blue-300"
        >
          Sign in
        </button>

        <span>
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LogoPage;
