import React from "react";
import { LoginForm } from "./components/LoginForm";
import { Dialog, LoadingIndicator } from "@/components";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const token = cookies().get("token");
  if (token && token.value) {
    redirect("/");
  }
  return (
    <div className="linear-gradient min-h-screen">
      <LoginForm />
    </div>
  );
}
