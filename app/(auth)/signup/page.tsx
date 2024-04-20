"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (password === confirmPassword) {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res) {
        router.push("/verify-email");
      }
    } else {
      console.log("password mismatch");
    }
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center gap-5 text-lg antialiased">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form className="flex flex-col gap-5 py-5 w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-md">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-md
        "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="text-md">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded-md
        "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md border-2 border-blue-300"
        >
          Sign up
        </button>

        <span>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
