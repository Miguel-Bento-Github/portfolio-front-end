import React, { useState } from "react";
import "./navbarHome.scss";
import BurgerIcon from "./burger/BurgerIcon";
import PageOverview from "./PageOverview";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const blur = () => {
    const bg = document.querySelector(".blur");
    bg.style.filter = "blur(2px)";
  };

  const unBlur = () => {
    const bg = document.querySelector(".blur");
    bg.style.filter = "blur(0)";
  };

  return (
    <nav className="nav">
      <BurgerIcon onClick={toggleModal} isOpen={isOpen} />
      {isOpen && (
        <PageOverview
          isOpen={isOpen}
          onOpen={blur}
          onClose={unBlur}
          close={toggleModal}
        />
      )}
    </nav>
  );
};

export default NavbarHome;
