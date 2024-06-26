import { ExtendedUser } from "@/next-auth";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

type UserInfoProps = {
  user?: ExtendedUser;
  label: string;
};

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xl">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-300 rounded">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xl">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-300 rounded">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xl">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-300 rounded">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xl">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-300 rounded">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-xl">
          <p className="text-sm font-medium">2FA</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
