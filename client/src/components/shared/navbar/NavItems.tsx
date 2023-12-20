import { navItems } from "@/utils";
import React from "react";
import NavItem from "./NavItem";

interface Props {
  handleClose?: () => void
}

const NavItems = ({ handleClose = () => { } }:Props) => {
  return (
    <>
      {navItems.map((navItem) => (
        <NavItem
          key={navItem.value}
          name={navItem.name}
          value={navItem.value}
          link={navItem.link}
          Icon={navItem.Icon}
          handleClose={handleClose}
        />
      ))}
    </>
  );
};

export default NavItems;
