import React from "react";
import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./layout/SidebarLogo";
import SidebarItem from "./layout/SidebarItem";
import SidebarTweetButton from "./layout/SidebarTweetButton";

const items = [
  { label: "Home", href: "/", icon: BsHouseFill },
  { label: "Notifications", href: "/notifications", icon: BsBellFill },
  { label: "Profile", href: "/users/123", icon: FaUser },
];

function Sidebar() {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item: any, index) => (
            <SidebarItem
              key={index}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;