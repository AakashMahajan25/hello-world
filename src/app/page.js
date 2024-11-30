import Head from 'next/head';
import Faq from '@/components/home/Faq';
import Hero from '@/components/home/Hero';
import Reviews2 from '@/components/home/Reviews2';
import React from 'react';
import Car from '@/components/home/Car';
import WhyUs from '@/components/home/WhyUs';
import TopPicks from '@/components/home/TopPicks';
import Protection from '@/components/home/Protection';

const page = () => {
  return (
    <div className="">
      <Head>
        {/* Basic SEO */}
        <title>Home | Camio PPF</title>
        <meta name="description" content="Shield your vehicle with CAMIO's top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta name="keywords" content="top picks, trusted platform, reviews, why us, protection, FAQ, Paint Protection, car protection, car shielding, best paint protection film, PPF, ppf" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Home | Camio PPF" />
        <meta property="og:description" content="Shield your vehicle with CAMIO's top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="og:image" content="https://www.camioppf.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.057b14df.png&w=256&q=75" />
        <meta property="og:url" content="https://www.camioppf.com" />
        <meta property="og:type" content="website" />

        {/* Facebook Tags */}
        <meta name="facebook:title" content="camioppf" />
        <meta name="facebook:description" content="Your Premier Paint Protection Film Supplier | Ensuring Top-Notch Vehicle Protection with Camio PPF | Quality You Can Rely On." />
        <meta name="facebook:image" content="https://scontent.fdel46-1.fna.fbcdn.net/v/t39.30808-1/452606054_334293006406924_6004079821722714146_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=qNoYbbqD9DgQ7kNvgFx-tYa&_nc_zt=24&_nc_ht=scontent.fdel46-1.fna&_nc_gid=ACGtRoCm0zprt0cMOUj6c7O&oh=00_AYAztuXeBYXe_nzxbLWoAEJupUGE2rBZEc1T-7tSXjacGA&oe=67510912" />

        {/* Instagram Tags */}
        <meta property="instagram:title" content="camioppf" />
        <meta property="instagram:description" content="Shield your vehicle with CAMIO’s top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="instagram:image" content="https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-19/460485117_7810580399045933_4463468894215397570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fKs9rVZNXwwQ7kNvgGFCyut&_nc_gid=31bfaf4104544070ac9e6754a9f123c4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBs3sgMUVEHPpz6nzZbGht1u7Oqlj2iF_lQwN3OOIw4IQ&oe=67510808&_nc_sid=8b3546" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.camioppf.com" />

        {/* Favicon */}
        <link rel="icon" href="https://www.camioppf.com/favicon.ico" />

        {/* Structured Data with JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.camioppf.com",
              "name": "Camio PPF",
              "description": "Shield your vehicle with CAMIO's top-tier Paint Protection Film, trusted by professionals worldwide.",
              "publisher": {
                "@type": "Organization",
                "name": "Camio PPF",
                "logo": "https://www.camioppf.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.057b14df.png&w=256&q=75"
              },

            }),
          }}
        />
      </Head>

      <Hero />
      <WhyUs />
      <TopPicks />
      <Car />
      <Protection />
      <Reviews2 />
      <Faq />
    </div>
  );
};

export default page;
