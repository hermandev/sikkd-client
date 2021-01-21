import React from "react";
import {
  IoLogoBuffer,
  IoCubeSharp,
  IoPeopleSharp,
  IoPieChartOutline,
  IoPersonSharp
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
    _tag: "CSidebarNavDropdown",
    name: "Data Master",
    route: "/master",
    icon: <IoLogoBuffer className="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Fakultas",
        to: "/master/fakultas",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Program Studi",
        to: "/master/program-studi",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dosen",
        to: "/master/dosen",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Operasional",
    route: "/operasional",
    icon: <IoCubeSharp className="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Verifikasi Berkas",
        to: "/operasional/verifikasi",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pembagian DPL",
        to: "/operasional/dpl",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Pembagian Lokasi",
        to: "/operasional/lokasi",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Penilaian",
        to: "/operasional/penilaian",
      },
    ],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/users",
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
