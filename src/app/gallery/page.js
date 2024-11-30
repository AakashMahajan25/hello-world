import Head from "next/head";
import React from "react";
import Gallery from "@/components/gallery/Gallery";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Gallery | CAMIO PPF</title>
        <meta
          name="description"
          content="Explore the CAMIO Gallery showcasing high-quality images of vehicles protected with our premium Paint Protection Film (PPF). See the difference CAMIO makes!"
        />
        <meta
          name="keywords"
          content="CAMIO Gallery, Paint Protection Film images, vehicle protection showcase, premium car protection"
        />
        <meta property="og:title" content="Gallery | CAMIO PPF" />
        <meta
          property="og:description"
          content="Take a look at the vehicles protected with CAMIO Paint Protection Film. Our gallery showcases the durability, clarity, and aesthetics of our PPF solutions."
        />
        <meta property="og:image" content="/assets/og-image-gallery.png" />
        <meta property="og:url" content="https://www.camioppf.com/gallery" />
        <meta property="instagram:title" content="camioppf" />
        <meta property="instagram:description" content="Shield your vehicle with CAMIO’s top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="instagram:image" content="https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-19/460485117_7810580399045933_4463468894215397570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fKs9rVZNXwwQ7kNvgGFCyut&_nc_gid=31bfaf4104544070ac9e6754a9f123c4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBs3sgMUVEHPpz6nzZbGht1u7Oqlj2iF_lQwN3OOIw4IQ&oe=67510808&_nc_sid=8b3546" />
        <link rel="canonical" href="https://www.camioppf.com/gallery" />
      </Head>
      <Gallery />
    </div>
  );
};

export default Page;
