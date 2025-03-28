import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'

import Header from '../../Sections/S1-header'
import Spendfreely from '../../Sections/S2-spendfreely'
import Serviceprovider from '../../Sections/S3-service-provider'
import Revenueshare from '../../Sections/S4-revenue-share'
import Rewards from '../../Sections/S5-rewards'
import Socialmedia from '../../Sections/S6-social-media'
import FAQ from '../../Sections/S7-faq/indesx'
import Footer from '../../Sections/S8-footer'
import Roadmap from '../../Sections/Roadmap'
import BpayCardTiers from '../../Sections/Bpay-card'
import TBA from '../../Sections/TBA'
const MainPage = (props) => {
  return (
    <PageWrapper>
    <LockerMenu />
    <TBA/>
    <Header/>
    <Spendfreely/>
    <Serviceprovider/>
    <Revenueshare/>
    <Rewards/>
    <BpayCardTiers/>
    <Roadmap/>
    <Socialmedia/>
    <FAQ/>
    <Footer/>
    </PageWrapper>
  )
}

export default MainPage