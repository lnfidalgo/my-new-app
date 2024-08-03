"use client";

import { useRouter } from "next/navigation";

interface SigninButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function SigninButton({
  children,
  mode = "redirect",
  asChild,
}: SigninButtonProps) {
  const router = useRouter();
  const onClicks = () => router.push("/auth/register");

  return <span onClick={onClicks}>{children}</span>;
}
