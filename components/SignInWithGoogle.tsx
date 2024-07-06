"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}/`,
        })
      }
      className="mt-4 flex gap-4"
      variant="secondary"
    >
      Login with Google
      <FcGoogle size={20} />{" "}
    </Button>
  );
};

export default SignInWithGoogle;
