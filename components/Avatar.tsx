import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

function Avatar({ userId, hasBorder, isLarge }: AvatarProps) {
  const { data: fetchUser } = useUser(userId);

  console.log(fetchUser);
  const router = useRouter();

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`${hasBorder ? "border-4 border-black" : ""} ${
        isLarge ? "h-32 w-32" : "h-12 w-12"
      } rounded-full hover:opacity-90 transition cursor-pointer relative`}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        src={fetchUser?.profileImage || "/images/placeholder.png"}
        onClick={onClick}
        alt="logo"
      />
    </div>
  );
}

export default Avatar;
