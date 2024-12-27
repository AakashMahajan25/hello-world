import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  Box,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import camio from "@/assets/camio.png";
import tpuClearGloss from "@/assets/products/newImages/tpuClearGloss.jpg";
import tpuBlackGloss from "@/assets/products/newImages/tpuBlackGloss.jpg";
import tpuClearMatte from "@/assets/products/newImages/tpuClearMatte.jpg";
import tpuBlackMatte from "@/assets/products/newImages/tpuBlackMatte.jpg";
import tphClearGloss from "@/assets/products/newImages/tphClearGloss.jpg";
import tphBlackGloss from "@/assets/products/newImages/tphBlackGloss.jpg";
import tphClearMatte from "@/assets/products/newImages/tphClearMatte.jpg";
import tphColorGloss from "@/assets/products/newImages/tphColorGloss.jpg";

const productData = [
  {
    series: "CAMIO TPU Series",
    products: [
      {
        title: "CAMIO TPU Clear Gloss",
        image: tpuClearGloss,
        description:
          "CAMIO TPU Clear Gloss offers premium paint protection with an ultra-high gloss finish. Ideal for luxury vehicles, it enhances the natural shine of the paintwork while providing superior protection against scratches, road debris, and environmental elements.",
        details: {
          keyFeatures: [
            "Ultra-gloss finish for enhanced shine.",
            "Self-healing technology for minor scratches.",
            "Hydrophobic properties that repel water and contaminants.",
            "Non-yellowing formula to maintain clarity over time.",
            "5-year warranty for long-lasting protection.",
          ],
          usages: [
            "Perfect for luxury and high-end vehicles.",
            "Ideal for maintaining a pristine showroom-like appearance.",
            "Suitable for any painted surface that requires extra gloss and protection.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: High Gloss",
            "Durability: Superior",
            "Warranty: 5 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Flexible and easy to install",
          ],
        },
      },
      {
        title: "CAMIO TPU Black Gloss",
        image: tpuBlackGloss,
        description:
          "CAMIO TPU Black Gloss provides a deep, glossy black finish that gives your vehicle a bold, modern look while ensuring the highest level of paint protection. It delivers superior durability and a sleek aesthetic, making it ideal for vehicles with dark paintwork.",
        details: {
          keyFeatures: [
            "Deep black gloss finish for a modern, bold look.",
            "Self-healing properties for scratch resistance.",
            "Ultra-hydrophobic technology for easy maintenance.",
            "Non-yellowing and stain-resistant formula.",
            "5-year warranty for peace of mind.",
          ],
          usages: [
            "Ideal for vehicles with dark paint or for those who prefer a sleek, black finish.",
            "Suitable for luxury and high-end vehicles.",
            "Adds a high-end look while providing essential protection.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: High Gloss Black",
            "Durability: Superior",
            "Warranty: 5 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Flexible and easy to install",
          ],
        },
      },
      {
        title: "CAMIO TPU Clear Matte",
        image: tpuClearMatte,
        description:
          "CAMIO TPU Clear Matte provides paint protection with a modern, matte finish. Designed for a unique and stealthy appearance, it offers the same top-tier protection as the glossy version while giving vehicles a distinct, low-reflective finish.",
        details: {
          keyFeatures: [
            "Matte finish for a stealthy, non-reflective appearance.",
            "Self-healing properties to prevent minor scratches.",
            "Hydrophobic properties for water and dirt repellent.",
            "Non-yellowing formula to maintain clarity.",
            "5-year warranty for long-lasting durability.",
          ],
          usages: [
            "Perfect for vehicles with a modern, low-gloss aesthetic.",
            "Ideal for customers seeking a unique and understated appearance.",
            "Suitable for protecting surfaces without adding shine.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: Matte",
            "Durability: Superior",
            "Warranty: 5 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Flexible and easy to install",
          ],
        },
      },
      {
        title: "CAMIO TPU Black Matte",
        image: tpuBlackMatte,
        description:
          "CAMIO TPU Black Matte gives your vehicle a bold, matte black finish, offering an ultra-modern and stealthy appearance. It provides high-end protection and a unique look, perfect for those who want to stand out.",
        details: {
          keyFeatures: [
            "Matte black finish for a sophisticated, stealthy look.",
            "Self-healing technology for minor surface damage.",
            "Hydrophobic properties for water and stain resistance.",
            "Long-lasting, non-yellowing protection.",
            "5-year warranty for high-level protection.",
          ],
          usages: [
            "Ideal for modern and bold vehicle appearances.",
            "Perfect for customers who prefer a matte, non-reflective look.",
            "Suitable for high-end applications on dark vehicles.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: Matte Black",
            "Durability: Superior",
            "Warranty: 5 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Flexible and easy to install",
          ],
        },
      },
    ],
  },
  {
    series: "CAMIO TPH Series",
    products: [
      {
        title: "CAMIO TPH Clear Gloss",
        image: tphClearGloss,
        description:
          "CAMIO TPH Clear Gloss provides an affordable yet high-quality paint protection solution. With a high-gloss finish, it enhances the vehicle's appearance while offering essential protection from everyday wear and tear.",
        details: {
          keyFeatures: [
            "High-gloss finish for a polished appearance.",
            "Self-healing properties for light scratch repair.",
            "Hydrophobic technology for easy cleaning and water repellency.",
            "Non-yellowing formula to ensure long-term clarity.",
            "3-year warranty for reliable protection.",
          ],
          usages: [
            "Suitable for budget-conscious customers seeking premium protection.",
            "Ideal for vehicles needing a high-gloss, protective finish.",
            "Perfect for general use and mid-range vehicles.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: High Gloss",
            "Durability: Excellent",
            "Warranty: 3 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Fast installation with moderate flexibility",
          ],
        },
      },
      {
        title: "CAMIO TPH Clear Matte",
        image: tphClearMatte,
        description:
          "CAMIO TPH Clear Matte provides a modern matte finish with reliable paint protection. Perfect for those who desire a sleek, low-gloss appearance while keeping their vehicle protected from environmental hazards.",
        details: {
          keyFeatures: [
            "Matte finish for a subtle, modern look.",
            "Self-healing properties for surface scratch repair.",
            "Hydrophobic for water resistance and easy maintenance.",
            "Non-yellowing technology to prevent discoloration over time.",
            "3-year warranty for effective protection.",
          ],
          usages: [
            "Ideal for vehicles with a modern, understated appearance.",
            "Suitable for budget-friendly applications that require matte finishes.",
            "Great for daily protection against common environmental factors.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: Matte",
            "Durability: Excellent",
            "Warranty: 3 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Fast installation with moderate flexibility",
          ],
        },
      },
      {
        title: "CAMIO TPH Black Gloss",
        image: tphBlackGloss,
        description:
          "CAMIO TPH Black Gloss offers a glossy black finish with excellent protection at an affordable price. It provides a modern, polished look while ensuring your vehicle stays shielded from everyday wear and tear, scratches, and environmental factors.",
        details: {
          keyFeatures: [
            "Glossy black finish for a bold and polished appearance.",
            "Self-healing properties to repair minor scratches.",
            "Hydrophobic technology to repel water and resist stains.",
            "Non-yellowing formula to maintain the black gloss finish over time.",
            "3-year warranty for consistent, reliable protection.",
          ],
          usages: [
            "Ideal for vehicles with dark paint or customers who prefer a sleek, glossy black finish.",
            "Suitable for budget-conscious users who still want premium-level protection.",
            "Perfect for modern and stylish vehicle applications.",
          ],
          specifications: [
            "Film Thickness: 190 microns",
            "Finish Type: High Gloss Black",
            "Durability: Excellent",
            "Warranty: 3 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Fast installation with moderate flexibility",
          ],
        },
      },
      {
        title: "CAMIO TPH Color Gloss",
        image: tphColorGloss,
        description:
          "CAMIO TPH Color Gloss is a versatile film offering vibrant color finishes along with excellent paint protection. It’s perfect for personalizing your vehicle while maintaining a glossy, eye-catching look.",
        details: {
          keyFeatures: [
            "Glossy color finish for customization.",
            "Self-healing properties to repair minor scratches.",
            "Hydrophobic coating for water and stain resistance.",
            "Non-yellowing protection to keep vibrant color intact.",
            "3-year warranty for dependable protection.",
          ],
          usages: [
            "Perfect for customers seeking to personalize their vehicle’s appearance.",
            "Suitable for colorful, stylish finishes with protection.",
            "Perfect for budget-friendly, vibrant color applications.",
          ],
          specifications: [
            "Film Thickness: 160 microns",
            "Finish Type: Gloss + Color",
            "Durability: Excellent",
            "Warranty: 3 Years",
            "Size: 1.52 x 15 meters (covers 250 sq. ft.)",
            "Application: Fast and easy to apply",
          ],
        },
      },
    ],
  },
];

const ProductsTab = () => {
  return (
    <div className="lg:px-24 py-20 lg:py-[120px]">
      <Tabs maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
        <TabList
          justifyContent="center"
          borderBottomWidth="0" // Removes default full-width bottom border
          className="px-2"
        >
          {productData.map((tab, index) => (
            <Tab
              fontSize={{ base: "xl", md: "2xl", lg: "5xl" }}
              fontWeight={"semibold"}
              key={index}
              color={"gray.500"}
              _selected={{ borderBottom: "2px solid", borderColor: "black", bg:"gray.100", color:"black" }}
              borderBottom={'2px solid'} 
              
            >
              {tab.series}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {productData.map((tab, index) => (
            <TabPanel key={index}>
              {tab.products.map((product, productIndex) => (
                <Flex
                  key={productIndex}
                  mb={0}
                  alignItems="center"
                  direction={{ base: "column", md: "row" }} // Stack on small screens, row on larger
                >
                  <Box
                    width={{ base: "100%", md: "50%" }}
                    padding={{ base: 4, md: 8, lg: 16, "2xl": 28 }}
                  >
                    <Image
                      src={product.image}
                      alt="Product image"
                      width={{ base: "100%", md: 500 }}
                      height={{ base: "auto", md: 500 }}
                      className="rounded-2xl"
                    />
                  </Box>
                  <Box
                    height={{base:"550px", md:"750px", lg:"500px"}}
                    width={{ base: "100%", md: "50%" }}
                    padding={{ base: 4, md: 8 }}
                  >
                    <Heading
                      fontFamily=""
                      as="h3"
                      py={{ base: 2, md: 4 }}
                      fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                    >
                      {product.title}
                    </Heading>
                    <Text
                      py={{ base: 2, md: 4 }}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {product.description}
                    </Text>
                    <Tabs>
                      <TabList>
                        <Tab py={{ base: 3, md: 6 }}>Key Features</Tab>
                        <Tab py={{ base: 3, md: 6 }}>Usages</Tab>
                        <Tab py={{ base: 3, md: 6 }}>Specifications</Tab>
                      </TabList>
                      <TabPanels height={{base:"300px", lg:"230px"}} overflowY={"auto"}>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.keyFeatures.map((feature, i) => (
                              <ListItem
                                py={1}
                                key={i}
                                fontSize={{ base: "sm", md: "md" }}
                              >
                                {feature}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.usages.map((usage, i) => (
                              <ListItem
                                py={1}
                                key={i}
                                fontSize={{ base: "sm", md: "md" }}
                              >
                                {usage}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.specifications.map((spec, i) => (
                              <ListItem
                                py={1}
                                key={i}
                                fontSize={{ base: "sm", md: "md" }}
                              >
                                {spec}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Flex>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ProductsTab;
