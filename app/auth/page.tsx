import SignInWithGoogle from "@/components/SignInWithGoogle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getServerSession } from "next-auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import SignInForm from "@/components/SignInForm";

const AuthRouter = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center p-24">
      <Card>
        <CardHeader>
          <CardTitle>Please Sign in</CardTitle>
          <CardDescription>
            To access the private page you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignInForm />
            <SignInWithGoogle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthRouter;
