import { Link } from "@tanstack/react-router";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const NavBar = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          className="h-10 lg:h-16"
          alt="Pokemon Logo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/pokemon">
          Pokemon
        </NavbarLink>
        <NavbarLink as={Link} href="/games">
          Games
        </NavbarLink>
        <NavbarLink as={Link} href="/favorites">
          Favorites
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
