import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Home",
        link: "#Home",
        },
        {
        title: "Features",
        link: "#Features",
        },
        {
        title: "Revenue share",
        link: "#Revenueshare",
        // target: "_blank"
        },
        {
          title: "Roadmap",
          link: "#Roadmap",
          },
          {
            title: "FAQ",
            link: "#FAQ",
            },
        {
        title: "Get your card",
        link: "#Getyourcard",
        customClass: "GetCardDesktop",
        // target: "_blank"
        },
    ];
    const MobilemenuList = [ // You can pass 4 perameters for menu title, link, target and customClass
      {
        title: "Get your card",
        customClass: "GetCard",
        // target: "_blank"
        }, 
      {
        title: "Home",
        link: "#Home",
        },
        {
        title: "Features",
        link: "#Features",
        },
        {
        title: "Revenue share",
        link: "#Revenueshare",
        // target: "_blank"
        },
        {
          title: "Roadmap",
          link: "#Roadmap",
          },
          {
            title: "FAQ",
            link: "#FAQ",
            },
       
    ];
  return (
    <Container>
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} MobilemenuList={MobilemenuList} />
    </Container>
  )
}

export default LockerMenu