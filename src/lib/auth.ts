import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import { admin, username } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  enableEmailVerification: true,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [nextCookies(), username(), admin()],
});
