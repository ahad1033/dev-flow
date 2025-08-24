"use client";

import AuthForm from "@/components/forms/AuthForm";

import { SignUpSchema } from "@/lib/validation";
import { signUpWithCredentials } from "@/lib/actions/auth.actions";

const SignInPage = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={signUpWithCredentials}
    />
  );
};

export default SignInPage;
