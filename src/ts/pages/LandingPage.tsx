/**
 * @author Tomas Sanchez
 */

import {Tab, Tabs, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import {Helmet} from "react-helmet";
import {NavBar} from "../components/header/NavBar";
import landingSVG from "../../assets/landing-demo.svg";
import salesSVG from "../../assets/sales-promo.svg";
import TextBold from "../components/text/TextBold.tsx";
import React, {useState} from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CampaignIcon from '@mui/icons-material/Campaign';
import SchoolIcon from '@mui/icons-material/School';
import BoltIcon from '@mui/icons-material/Bolt';
import InsightsIcon from '@mui/icons-material/Insights';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SideImageContainer from "../components/layout/SideImageContainer.tsx";
import IconItem from "../components/layout/IconItem.tsx";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index &&
                <div className="container">
                    {children}
                </div>
            }
        </div>
    );
}


export const LandingPage = () => {

    const usersNumber = "1,000";
    const schedulesNumber = "500";
    const [value, setValue] = useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        event.currentTarget
    };


    return (
        <>
            <Helmet title={"Order your meetings | Cosmic Planner"}/>
            <header>
                <NavBar/>
            </header>
            <main className="container-fluid mt-5">
                <section className="container user-select-none mb-5">
                    <SideImageContainer image={landingSVG} alt="Cosmic Landing" className="mt-5 py-5">
                        <div>
                            <Typography variant="h2" gutterBottom className="text-sm-center text-lg-start">
                                Easy <TextBold
                                className="d-sm-inline d-lg-block">cosmic</TextBold> scheduling
                            </Typography>
                            <Typography variant="h5" gutterBottom className="text-sm-center text-lg-start">
                                Because Cosmos is the opposite of Chaos, you see.
                            </Typography>
                            <hr className="mx-5"/>
                            <Typography variant="body1" gutterBottom className="text-sm-center text-lg-start">
                                <a style={{color: deepPurple.A400}} href="/sign-up">Sign up for free</a> and start
                                scheduling your
                                meetings in a breeze.
                                <br/>
                                No credit card
                                required.
                            </Typography>
                        </div>
                    </SideImageContainer>
                </section>
                <section>
                    <div className="row my-5">
                        <div className={"col text-center"}>
                            <Typography variant="h3" gutterBottom sx={{fontSize: "2rem"}}>
                                Simplified more than <TextBold>{schedulesNumber}</TextBold> schedules for more
                                than <TextBold>{usersNumber}</TextBold> worldwide.
                            </Typography>
                        </div>
                    </div>
                </section>
                <section className={"row"}>
                    <div className={"text-center py-4"} style={{backgroundColor: deepPurple["50"]}}>
                        <Typography variant="h3" gutterBottom sx={{fontSize: "2rem"}}>
                            <TextBold>Easy</TextBold> to use, <TextBold>easy</TextBold> to share.
                        </Typography>
                    </div>
                </section>
                <section className="row mt-5 container">
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Sales" icon={<MonetizationOnIcon/>}/>
                        <Tab label="Marketing" icon={<CampaignIcon/>}/>
                        <Tab label="Education" icon={<SchoolIcon/>}/>
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SideImageContainer image={salesSVG} alt={"Sales Promo"}>
                            <div className="py-5 mt-5 mx-5">
                                <IconItem title={"Close deals faster"} icon={<BoltIcon/>}
                                          description={
                                              "Remove scheduling barriers," +
                                              " secure high-value meetings accelerating the sales cycle"}/>
                                <IconItem title={"Analyze meetings data"} icon={<InsightsIcon/>}
                                          description={
                                              "Optimize your scheduling strategies, with the most successful times for" +
                                              " scheduling meetings"}/>
                                <IconItem title={"Improve customer experience"} icon={<SupportAgentIcon/>}
                                          description={
                                              "Offer easy scheduling options and personalized follow-ups"}/>
                            </div>
                        </SideImageContainer>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </section>
            </main>
        </>
    );
}