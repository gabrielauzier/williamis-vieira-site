import Head from "next/head";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";

import { HeroSection } from "../components/HeroSection";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <div className={styles.container}>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
