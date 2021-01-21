import React from "react";
import {
  IoLogoBuffer,
  IoCubeSharp,
  IoPieChartOutline,
  IoPersonSharp,
  IoPeopleSharp,
} from "react-icons/io5";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <IoPieChartOutline className="c-sidebar-nav-icon" />,
    badge: {
      color: "success",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Manage"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Mahasiswa",
    to: "/mahasiswa",
    icon: <IoPeopleSharp className="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["Settings"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Profil",
    to: "/profil",
    icon: <IoPersonSharp className="c-sidebar-nav-icon" />,
  },
];

export default _nav;
