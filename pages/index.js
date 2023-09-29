import Head from "next/head";
import Image from "next/image";
import HomeBanner from "../components/HomeBanner";
import BookingTabs from "../components/BookingTabs";
import FleetCardCm from "../components/FleetCardCm";

export default function Home() {
  return (
    <>
      <main>
        <HomeBanner />
        <FleetCardCm />
      </main>
    </>
  );
}
