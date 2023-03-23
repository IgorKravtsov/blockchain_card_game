import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { routes } from "src/shared/constants/routes";
import { ConnectToFriend } from "src/features/ConnectToFriend";
import { useAuth } from "src/shared";

interface HeaderProps {
  onCreateClick?: () => void;
  // onConnectClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCreateClick,
  // onConnectClick,
}) => {
  const { isConnected } = useAuth();

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const fn = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {!isConnected && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to={routes.NotAuth} className="flex items-center">
            Login
          </Link>
        </Typography>
      )}
      <ConnectToFriend />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          My money
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-lg py-2 px-4 lg:px-8 lg:py-4 my-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" variant="small" className="mr-4 py-1.5 font-normal">
          <span>Blockchain game</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={onCreateClick}
        >
          <span>Create a room</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2"
            onClick={onCreateClick}
          >
            <span>Create room</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};
