import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase";

const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    
    if (!auth.currentUser || !auth.currentUser.emailVerified && router.pathname !== "sign-in") {
      router.push("/sign-in")
    } else if (auth.currentUser.emailVerified && router.pathname === "sign-in") {
      router.push("/dashboard")
    }

  }, [auth, router]);

  return auth.currentUser;
};

export default useRequireAuth