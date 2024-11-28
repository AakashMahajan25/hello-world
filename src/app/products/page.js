import Advantage from "@/components/products/Advantage";
import CamioSeries from "@/components/products/CamioSeries";
import Hero from "@/components/products/Hero";
import KeyFeatures from "@/components/products/KeyFeatures";
import Products from "@/components/products/Products";
import ProductsTab from "@/components/products/ProductsTab";
import WhyCamio from "@/components/products/WhyCamio";
import WhyChoose from "@/components/products/WhyChoose";
import React from "react";
import tpuSeries1 from "@/assets/tpuSeries1.png";
import tpuSeries2 from "@/assets/tpuSeries2.png";
import tpuSeries3 from "@/assets/tpuSeries3.png";
import tpuSeries4 from "@/assets/tpuSeries4.png";
import ComparisonTable from "@/components/products/ComparsionTable";
import carimg from '@/assets/carimage.png'
import whyChooseTph from "@/assets/products/newImages/whyChooseTph.jpg"

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
      description: "Best-in-class durability and flexibility for top-tier protection."
    },
    {
      number: 2,
      title: "Corrosion-resistant",
      description: "High resistance to environmental damage and chemical corrosion."
    },
    {
      number: 3,
      title: "Super Quality",
      description: "Ideal for luxury and high-end vehicles where aesthetics and protection matter equally."
    }
  ];


  const featuresTPH = [
    {
      number: 1,
      title: "Cost-Effective ",
      description: "Excellent value for customers seeking cost-effective protection."
    },
    {
      number: 2,
      title: "Corrosion Shield",
      description: "Offers great performance with premium features like self-healing and hydrophobicity."
    },
    {
      number: 3,
      title: "Reliable Quality",
      description: "Ideal for daily drivers or budget-conscious customers looking for reliable paint protection."
    }
  ];
  

  return (
    <div>
      <Hero />
      <WhyCamio products={products} />
      {/* <Products /> */}
      
      <WhyChoose
        features={featuresTPU}
        text={'Why Choose CAMIO TPU'}
        Img={carimg}

      />
      <WhyChoose
        features={featuresTPH}
        Img={whyChooseTph}
        text={'Why Choose CAMIO TPH'}
      />
      {/* <CamioSeries /> */}
      <ProductsTab />
      <ComparisonTable />
      <Advantage />
    </div>
  );
};

export default Page;
