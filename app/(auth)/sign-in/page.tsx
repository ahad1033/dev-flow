"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validation";

const SignUpPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => {
        (data) => Promise.resolve({ success: true, data });
      }}
    />
  );
};

export default SignUpPage;
