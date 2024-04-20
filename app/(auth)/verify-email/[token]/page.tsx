"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const VerifyToken = ({ params }: any) => {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/auth/verifyemail", {
        method: "POST",
        body: JSON.stringify({ token: params.token }),
      });

      if (res.ok) {
        return router.push("/login");
      }
    })();
  }, []);
};

export default VerifyToken;
