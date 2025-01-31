import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Home",
        link: "https://poodle.finance/",
        },
        {
        title: "Locker",
        link: "/locker",
        },
        {
        title: "View Chart",
        link: "https://www.dextools.io/app/ether/pair-explorer/0xD017EA99F60535e5e0f87f997968ad59C6a61B06",
        target: "_blank"
        },
        {
        title: "Buy Now",
        link: "https://app.uniswap.org/#/swap?outputCurrency=0xf5d20bae62a50c2a0953e054e9544d7906114df9&chain=mainnet",
        customClass: "",
        target: "_blank"
        },
    ];
  return (
    <Container>
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} />
    </Container>
  )
}

export default LockerMenu