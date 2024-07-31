"use server";

import { signOut } from "@/src/auth";
import { redirect } from "next/navigation";

export const logout = async () => {
  await signOut();
};
