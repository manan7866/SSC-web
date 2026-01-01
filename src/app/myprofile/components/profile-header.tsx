import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Calendar, Mail } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileHeader() {
  const { user, loading } = useAuth();

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          {/* Avatar */}
          <div className="relative">
            {loading ? (
              <Skeleton className="h-24 w-24 rounded-full" />
            ) : (
              <Avatar className="h-24 w-24">
                <AvatarImage src={undefined} alt="Profile" />
                <AvatarFallback className="text-2xl">
                  {user?.fullName?.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            )}
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              {loading ? (
                <Skeleton className="h-6 w-40" />
              ) : (
                <h1 className="text-2xl font-bold text-fixnix-lightpurple">
                  {user?.fullName} {user?.lastName}
                </h1>
              )}
              {/* <Badge variant="secondary">Pro Member</Badge> */}
            </div>
           {user?.address && <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              {user?.address}
            </div>}
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
              {/* Email */}
              <div className="flex items-center gap-1">
                <Mail className="size-4" />
                {loading ? <Skeleton className="h-4 w-32" /> : user?.email}
              </div>

              {/* Joined Date */}
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                {loading ? (
                  <Skeleton className="h-4 w-24" />
                ) : (
                  "Joined March 2023"
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
