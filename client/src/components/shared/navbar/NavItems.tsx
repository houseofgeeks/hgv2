import { navItems } from "@/utils";
import React from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  return (
    <>
      {navItems.map((navItem) => (
        <NavItem key={navItem.value} item={navItem} />
      ))}
    </>
  );
};

export default NavItems;
