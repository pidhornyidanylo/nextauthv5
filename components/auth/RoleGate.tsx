import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import React from "react";
import { FormError } from "../FormError";

const RoleGate = ({
  children,
  allowedRole,
}: {
  children: React.ReactNode;
  allowedRole: UserRole;
}) => {
  const role = useSession().data?.user.role;
  if(role !== allowedRole) {
      return <FormError message="You do not have permission to view this content" />;
  }
  return <>{children}</>
};

export default RoleGate;
