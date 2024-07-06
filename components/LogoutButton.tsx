"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
