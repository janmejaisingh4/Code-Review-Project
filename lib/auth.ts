import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
//https://better-auth.com/docs/installation
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
});