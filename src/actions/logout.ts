"use server";

import { signOut } from "@/src/auth";
import { DEFAULT_LOGOUT_REDIRECT } from "../routes";

export const logout = async () => {
  await signOut({redirectTo: DEFAULT_LOGOUT_REDIRECT });
};
