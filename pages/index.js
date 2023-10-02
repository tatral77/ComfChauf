import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../components/HomeBanner";
import BookingTabs from "../components/BookingTabs";
import FleetCardCm from "../components/FleetCardCm";
import Tabs from "../components/FleetTab/Tabs";
import { Container } from "@mui/material";
export default function Home() {
  return (
    <>
      <div sx={{ padding: "90px 90px"}}>
        <HomeBanner />
        <FleetCardCm />
        <Container>
        <Tabs/>
        </Container>
        </div>
    </>
  );
}
