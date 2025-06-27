"use client";

import { Button } from "@/components/ui/button";
import { authClient, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 font-[family-name:var(--font-geist-sans)]">
      <p className="text-3xl font-semibold">Protected Route</p>
      <p>{isPending ? "loading..." : `Hello, ${session?.user?.name}`}</p>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
}
