import { AuthOptions, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../lib/db";
import type { Adapter } from "next-auth/adapters";

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      // profile(profile) {
      //   console.log("Profile Google: ", profile);
      //   let userRole = "Google User";
      //   if (profile?.email == "billasaketh@gmail.com") {
      //     userRole = "admin";
      //   }
      //   return {
      //     ...profile,
      //     id: profile.sub,
      //     role: userRole,
      //   };
      // },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      return user.email == "sakethrambilla@gmail.com";
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;
