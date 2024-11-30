import Head from "next/head";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Journey from "@/components/about/Journey";
import Power from "@/components/about/Power";
import Gallery from "@/components/about/Gallery";
import React from "react";

const Page = () => {
  return (
    <div>
      <Head>
        <title>About Us | CAMIO PPF</title>
        <meta
          name="description"
          content="Discover CAMIO's dedication to providing world-class paint protection solutions. Learn about our mission, values, journey, and why we are trusted worldwide for protecting your vehicle's aesthetics."
        />
        <meta
          name="keywords"
          content="About CAMIO, CAMIO Paint Protection Film, vehicle protection, superior PPF, car protection solutions, premium paint protection"
        />
        <meta property="og:title" content="About Us | CAMIO PPF" />
        <meta
          property="og:description"
          content="At CAMIO, we combine innovation and quality to offer the best Paint Protection Films. Learn about our story, values, and commitment to excellence."
        />
        <meta property="og:image" content="/assets/og-image-about.png" />
        <meta property="og:url" content="https://www.camioppf.com/about" />
        <meta property="instagram:title" content="camioppf" />
        <meta property="instagram:description" content="Shield your vehicle with CAMIO’s top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="instagram:image" content="https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-19/460485117_7810580399045933_4463468894215397570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fKs9rVZNXwwQ7kNvgGFCyut&_nc_gid=31bfaf4104544070ac9e6754a9f123c4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBs3sgMUVEHPpz6nzZbGht1u7Oqlj2iF_lQwN3OOIw4IQ&oe=67510808&_nc_sid=8b3546" />
        <link rel="canonical" href="https://www.camioppf.com/about" />
      </Head>
      <Hero />
      <Mission />
      <Values />
      <Journey />
      <Power />
      <Gallery />
    </div>
  );
};

export default Page;
