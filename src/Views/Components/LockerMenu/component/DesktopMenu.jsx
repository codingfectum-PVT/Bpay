import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/logo.svg";
import { DesktopMainMenu, MaterialUISwitch, MenuLink } from "../styles";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";

const DesktopMenu = (props) => {
  const currentTheme = useSelector( (state) => state.LDTheme.value )
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Get your card");
   const [isAnimating, setIsAnimating] = useState(false);
 
  // Handles "Get Your Card" Button Click
  const handleGetCardClick = () => {
    setButtonText("Coming Soon");
    setIsAnimating(true);

    setTimeout(() => {
      setButtonText("Get your card");
      setIsAnimating(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px">
        <img src={logo} width="150" height='50' alt="Logo" />
      </MenuLink>
      <div style={{display:"flex" ,alignItems:"center"}}>
        {props.menuList.map((value, i) => (
                        value.customClass === "GetCardDesktop" ? (
                          <button
                            key={i}
                            className={`d-block GetCardDesktop ${isAnimating ? "animate" : ""}`}
                            onClick={handleGetCardClick}
                            style={{
                              background: "#FFC107",
                              border: "none",
                              // padding: "10px 15px",
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
                          <MenuLink key={i} href={value.link} target={value.target} >
                            {value.title}
                          </MenuLink>
                        )
                      ))}
        {/* {props.menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )} */}
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;
