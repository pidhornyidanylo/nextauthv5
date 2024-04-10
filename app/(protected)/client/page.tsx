"use client";

import UserInfo from "@/components/UserInfo";
import { useSession } from "next-auth/react";

const ClientPage = () => {
  const session = useSession();
  return <UserInfo user={session.data?.user} label="Client Component 💻" />;
};

export default ClientPage;
