"use client";

import AuthForm from "@/components/forms/AuthForm";

import { SignInSchema } from "@/lib/validation";
import { signInWithCredentials } from "@/lib/actions/auth.actions";

const SignUpPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignUpPage;
