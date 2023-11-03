import Avatar from "@/components/Avatar";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import React from "react";

interface UserHero {
  userId: string;
}

function UserHero({ userId }: UserHero) {
  const { data: fetchUser } = useUser(userId);
  return (
    <div className="bg-neutral-700 h-44 relative">
      {fetchUser?.coverImage && (
        <Image
          src={fetchUser.coverImage}
          fill
          alt="Cover Image"
          className="object-cover"
        />
      )}
      <div className="absolute -bottom-16 left-4">
        <Avatar userId={userId} hasBorder isLarge />
      </div>
    </div>
  );
}

export default UserHero;
