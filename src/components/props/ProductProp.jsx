import React from "react";
import { Stack, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Image from "next/image";

const ProductProp = ({
  imageSrc,
  title,
  description,
  features,
  children,
  flexDirection = "flex",
}) => {
  return (
    <div className="max-w-full mx-auto px-4 md:p-8 lg:px-3 py-[80px] lg:py-[120px]">
      <Card overflow="hidden" boxShadow="none" border="none">
        <div className={`md:flex flex-col ${flexDirection === "reverse-flex"
            ? "md:flex-row-reverse"
            : "md:flex-row"
            } gap-6 md:gap-8`}
        >
          {/* Image Section */}
          <div className="p-4 flex justify-center items-center w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt="Luxury SUV with protection film"
              width={560}
              height={446}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Content Section */}
          <Stack
            spacing={6}
            justify="center"
            maxW={{ base: "100%", md: "50%" }}
            // align={{ base: "center", md: "flex-start" }}
            textAlign="left"
            p={{ base: 4 }}
          >
            <CardHeader padding="0">
              <Heading
              fontFamily=""
                as="h2"
                fontSize={{ base: "26px", md: "32px", lg: "38px" }}
                fontWeight="700"
                textAlign="left"
                mb={{ base: "18px", lg: "10px" }}
              >
                {title}
              </Heading>
              <p
                style={{
                  lineHeight: "1.4",
                  textAlign: "left",
                }}
                className="lg:text-[17px] text-[15px] font-[400] mb-0"
              >
                {description}
              </p>
            </CardHeader>
            <CardBody padding="0">
              <div className="lg:space-y-7 space-y-4 flex flex-col">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="pt-1">
                      <HiOutlineCheckCircle
                        className="text-[#007660]"
                        size={22}
                      />
                    </div>
                    <div>
                      <Heading
              fontFamily=""
                        fontSize={{ base: "20px", md: "20px", lg: "25px" }}
                        fontWeight="500"
                        mb={{ base: 2, md: 0, lg: "8px" }}
                      >
                        {feature.title}
                      </Heading>
                      <p
                        // style={{
                        //   fontSize: "16px",
                        //   fontWeight: 400,
                        //   lineHeight: "1.4",
                        // }}
                        className="text-[15px] lg:text-[16px] font-[400]"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
                {children}
              </div>
            </CardBody>
          </Stack>
        </div>
      </Card>
    </div>
  );
};

export default ProductProp;
