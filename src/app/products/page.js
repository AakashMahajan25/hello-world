import Head from "next/head";
import Advantage from "@/components/products/Advantage";
import Hero from "@/components/products/Hero";
import ProductsTab from "@/components/products/ProductsTab";
import WhyCamio from "@/components/products/WhyCamio";
import WhyChoose from "@/components/products/WhyChoose";
import React from "react";
import tpuSeries1 from "@/assets/tpuSeries1.png";
import tpuSeries3 from "@/assets/tpuSeries3.png";
import tpuSeries4 from "@/assets/tpuSeries4.png";
import ComparisonTable from "@/components/products/ComparsionTable";
import carimg from "@/assets/carimage.png";
import whyChooseTph from "@/assets/products/newImages/whyChooseTph.jpg";

const Page = () => {
  const products = [
    {
      name: "Camio TPU Clear Gloss",
      image: tpuSeries1,
      id: 1,
      details:
        "This ultra-gloss film provides enhanced shine, self-healing, and water repellency. With a non-yellowing formula and 5-year warranty, it's ideal for luxury vehicles and easy to install on large surfaces.",
    },
    {
      name: "CAMIO TPU Black Gloss",
      image: tpuSeries1,
      id: 2,
      details:
        "This high-gloss black film offers a bold finish, self-healing, and hydrophobic properties. With stain resistance, a non-yellowing formula, and a 5-year warranty, it’s ideal for dark or luxury vehicles and easy to apply to large areas.",
    },
    {
      name: "CAMIO TPU Clear Matte",
      image: tpuSeries3,
      id: 3,
      details:
        "This matte film provides a stealthy, non-reflective look with self-healing, hydrophobic, and non-yellowing properties. It offers long-lasting durability with a 5-year warranty, ideal for a modern, low-gloss aesthetic and large coverage areas.",
    },
    {
      name: "CAMIO TPU Black Matte",
      image: tpuSeries4,
      id: 4,
      details:
        "This matte black film offers a sophisticated, non-reflective finish with self-healing and hydrophobic properties. It provides durable, non-yellowing protection with a 5-year warranty, ideal for a bold, modern appearance on high-end dark vehicles.",
    },
  ];

  const featuresTPU = [
    {
      number: 1,
      title: "Superior durability",
      description:
        "Best-in-class durability and flexibility for top-tier protection.",
    },
    {
      number: 2,
      title: "Corrosion-resistant",
      description:
        "High resistance to environmental damage and chemical corrosion.",
    },
    {
      number: 3,
      title: "Super Quality",
      description:
        "Ideal for luxury and high-end vehicles where aesthetics and protection matter equally.",
    },
  ];

  const featuresTPH = [
    {
      number: 1,
      title: "Cost-Effective",
      description:
        "Excellent value for customers seeking cost-effective protection.",
    },
    {
      number: 2,
      title: "Corrosion Shield",
      description:
        "Offers great performance with premium features like self-healing and hydrophobicity.",
    },
    {
      number: 3,
      title: "Reliable Quality",
      description:
        "Ideal for daily drivers or budget-conscious customers looking for reliable paint protection.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Products | Camio PPF</title>
        <meta
          name="description"
          content="Explore Camio's premium TPU and TPH paint protection films, designed for durability, aesthetics, and advanced car care. Discover superior quality for luxury vehicles and budget-friendly options."
        />
        <meta
          name="keywords"
          content="TPU paint protection film, TPH paint protection film, Camio PPF, car protection film, gloss protection, matte protection, self-healing film, corrosion-resistant film, paint shield"
        />
        <meta
          property="og:title"
          content="Products | Camio Paint Protection Film"
        />
        <meta
          property="og:description"
          content="Discover Camio's range of top-tier paint protection films for luxury and daily driver vehicles. Our products ensure premium protection with style."
        />
        <meta property="og:image" content="/assets/og-image-products.png" />
        <meta property="og:url" content="https://www.camioppf.com/products" />
         {/* Instagram Tags */}
         <meta property="instagram:title" content="camioppf" />
        <meta property="instagram:description" content="Shield your vehicle with CAMIO’s top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="instagram:image" content="https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-19/460485117_7810580399045933_4463468894215397570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fKs9rVZNXwwQ7kNvgGFCyut&_nc_gid=31bfaf4104544070ac9e6754a9f123c4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBs3sgMUVEHPpz6nzZbGht1u7Oqlj2iF_lQwN3OOIw4IQ&oe=67510808&_nc_sid=8b3546" />
        <link rel="canonical" href="https://www.camioppf.com/products" />
      </Head>
      <Hero />
      <WhyCamio products={products} />
      <WhyChoose features={featuresTPU} text={"Why Choose CAMIO TPU"} Img={carimg} />
      <WhyChoose features={featuresTPH} Img={whyChooseTph} text={"Why Choose CAMIO TPH"} />
      <ProductsTab />
      <ComparisonTable />
      <Advantage />
    </div>
  );
};

export default Page;
