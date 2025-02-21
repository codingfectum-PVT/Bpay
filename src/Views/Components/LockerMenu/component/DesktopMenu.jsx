import React from "react";
import logo from "../../../../assets/logo.svg";
import { DesktopMainMenu, MenuLink } from "../styles";

const DesktopMenu = (props) => {
  return (
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px">
        <img src={logo} width="130" height="50" alt="Logo" />
      </MenuLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.menuList.map((value, i) =>
          value.customClass === "GetCardDesktop" ? (
            <button key={i} className="d-block GetCardDesktop">
              <span className="front">Get your card</span>
              <span className="back">Coming soon</span>
            </button>
          ) : (
            <MenuLink key={i} href={value.link} target={value.target}>
              {value.title}
            </MenuLink>
          )
        )}
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;