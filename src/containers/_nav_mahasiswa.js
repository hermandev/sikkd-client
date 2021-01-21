import React from "react";
import {
  IoLogoBuffer,
  IoPrintSharp,
  IoPieChartOutline,
  IoPersonSharp,
  IoReaderOutline
} from "react-icons/io5";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Mahasiswa",
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
    name: "Pendaftaran KKD",
    to: "/kkd",
    icon: <IoLogoBuffer className="c-sidebar-nav-icon" />,
  },
 
  {
    _tag: "CSidebarNavItem",
    name: "Cetak Kartu Ujian",
    to: "/kartu",
    icon: <IoPrintSharp className="c-sidebar-nav-icon" />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Nilai",
    to: "/nilai",
    icon: <IoReaderOutline className="c-sidebar-nav-icon" />,
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
