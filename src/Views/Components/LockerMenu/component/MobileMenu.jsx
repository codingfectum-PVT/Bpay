import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../assets/logo.svg";
import logoicon from "../../../../assets/logoicon.svg";
import {
  MaterialUISwitch,
  MenuLink,
  MobileMainMenu,
  SiteLogo,
  DrawerBox,
  DrawerDivider,
  Humburgger,
  HumburggerClose,
  MenuButton
} from "../styles";
import { Box, styled } from "@mui/material";

const MobileMenu = (props) => {
  const currentTheme = useSelector((state) => state.LDTheme.value);
  const dispatch = useDispatch();
  const [state, setState] = useState({ left: false });
  const [buttonText, setButtonText] = useState("Get your card");
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle Mobile Menu Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event?.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Handles "Get Your Card" Button Click
  const handleGetCardClick = () => {
    setButtonText("Coming Soon");
    setIsAnimating(true);

    setTimeout(() => {
      setButtonText("Get your card");
      setIsAnimating(false);
    }, 2000); // Reset after 2 seconds
  };

  const BoxCustom = styled(Box)`
    display: flex;
    font-size: 30px;
    align-items: center;
    font-weight: 500;
  `;

  const Drawers = styled(Drawer)`
    .MuiDrawer-paper {
      width: 100% !important;
    }
  `;

  return (
    <MobileMainMenu>
      <MenuLink href="/" p="15px 0 15px">
        <SiteLogo src={logo} width="150" height="50" />
      </MenuLink>

      {/* Show Hamburger only when menu is closed */}
      {!state["left"] && (
        <MenuButton onClick={toggleDrawer("left", true)}>
          <Humburgger />
        </MenuButton>
      )}

      {/* Side Drawer Menu */}
      <Drawers anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
        <DrawerBox role="presentation">
          <DrawerDivider>
            {/* Logo inside the menu */}
            <MenuLink href="/">
              <BoxCustom>
                <SiteLogo src={logoicon} width="50" height="50" />
                &nbsp;Bpay
              </BoxCustom>
            </MenuLink>

            {/* Close Button (X) inside menu */}
            <MenuButton onClick={toggleDrawer("left", false)} style={{ position: "absolute", right: 20, top: 20 }}>
              <HumburggerClose>X</HumburggerClose>
            </MenuButton>

            <Divider />
            <List>
              {props.MobilemenuList.map((value, i) => (
                value.customClass === "GetCard" ? (
                  <button
                    key={i}
                    className={`d-block GetCard ${isAnimating ? "animate" : ""}`}
                    onClick={handleGetCardClick}
                    style={{
                      background: "#FFC107",
                      border: "none",
                      padding: "10px 15px",
                      cursor: "pointer",
                      fontSize: "16px",
                      transition: "0.3s ease",
                      borderRadius: "5px",
                      textAlign: "center",
                      marginBottom: "10px"
                    }}
                  >
                    {buttonText}
                  </button>
                ) : (
                  <MenuLink key={i} href={value.link} target={value.target} className="d-block">
                    {value.title}
                  </MenuLink>
                )
              ))}
            </List>
          </DrawerDivider>
        </DrawerBox>
      </Drawers>
    </MobileMainMenu>
  );
};

export default MobileMenu;
