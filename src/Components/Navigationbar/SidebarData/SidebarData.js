import React from "react";
import {
  IoBusiness,
  IoPersonSharp,
  IoGitCompare,
  IoTrainSharp,
} from "react-icons/io5";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { GiHouse } from "react-icons/gi";
import { RiMovieFill } from "react-icons/ri";
import { FaGlobe, FaHeartbeat, FaUserFriends } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiArrowRightSFill } from "react-icons/ri";
//import { GrTechnology } from "react-icons/gr";

export const SidebarData = [
  {
    title: "Business",
    // path: "/reports",
    icon: <IoBusiness />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Autos & Transportation",
        path: "/template-category?category=Business&sub-category=Transportion",
        // icon: <RiArrowRightSFill />,
        cName: "sub-nav",
      },
      {
        title: "Email Newsletter Templates",
        path: "/template-category?category=sex&sub-category=b4marriage",
        // icon: <RiArrowRightSFill />,
        cName: "sub-nav",
      },
      {
        title: "Corporate Business",
        path: "/reports/reports3",
        // icon: <RiArrowRightSFill />,
      },
      {
        title: "eCommerce",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Classifieds Ads",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Agriculture",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Banking",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Video Background",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Community",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Education School",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Industrial",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Human Resource ",
        path: "/reports/reports3",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Personal",
    // path: "/reports",
    icon: <IoPersonSharp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Personal",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Fashion",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Photo Gallery",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Wedding",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Animals & Pets",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Basic",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Blog",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Housing",
    // path: "/reports",
    icon: <GiHouse />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Home Maintenance & Service",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Interior and Furniture",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Real Estate",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Exterior Design",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Laundry",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Entertainment",
    // path: "/reports",
    icon: <RiMovieFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Entertainment",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Gaming",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Mobile Content Portal",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Music",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sports",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Video Content Portal",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Web Development",
    // path: "/reports",
    icon: <FaGlobe />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "UI Kits",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Admin",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Blog",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Web Elements",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "404 Error Page",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Under Construction",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Web Hosting",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Portfolio",
    // path: "/reports",
    icon: <ImProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Blog",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Personal",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Photo Gallery",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Society & People",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Health",
    // path: "/reports",
    icon: <FaHeartbeat />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Medical Hospital",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Beauty and Spa",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Social",
    // path: "/reports",
    icon: <FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Community",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Society & People",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Technology",
    // path: "/reports",
    icon: <IoGitCompare />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Mobile App",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Web Hosting",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Travel",
    // path: "/reports",
    icon: <IoTrainSharp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Travel Agency",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Hotels and Restaurants",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
];
