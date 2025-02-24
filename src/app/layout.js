'use client';
import "./globals.css";
// import logo from "@/assets/logo.png"
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { Sora } from "next/font/google";
import { usePathname } from "next/navigation";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  const metadata = {
    title: "CAMIO PPF - Paint Protection Film in Delhi | Self-Healing PPF",
    description:
      "Premium Paint Protection Film (PPF) services in Delhi. Self-healing, non-yellowing films protect against scratches and debris. 5-year warranty available.",
    url: `https://yourwebsite.com${pathname}`,
    image: "https://ibb.co/spTKTmgg", 
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CAMIO PPF",
    "url": metadata.url,
    "logo": "https://ibb.co/spTKTmgg", 
    "description": metadata.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91XXXXXXXXXX",
      "contactType": "customer service",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Canonical Tag */}
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags (For Social Media) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Favicon & Theme Color */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        {/* Structured Data (JSON-LD for SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Ahrefs Analytics Script */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8BBCQjlVUQwQR3e57lXgew"
          async
        ></script>
      </head>
      <body className={`${sora.className} antialiased overflow-x-hidden relative`}>
        <Providers>
          {!isAdminRoute && <Navbar />}
          {!isAdminRoute && (
            <button
              onClick={onOpen}
              className="text-3xl lg:text-5xl fixed right-10 bottom-10 cursor-pointer text-yellow-400"
            >
              <IoChatbubbleEllipsesOutline />
            </button>
          )}

          {/* Inquiry Modal */}
          <Modal initialFocusRef={React.useRef(null)} finalFocusRef={React.useRef(null)} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Inquiry Form</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your Name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder="Your Email (Optional)" type="email" />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Phone Number" type="tel" />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input placeholder="City, State" />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Purpose of Inquiry</FormLabel>
                  <Select placeholder="Select an option">
                    <option value="dealer">I want to become a dealer</option>
                    <option value="buy">I want to buy CAMIO PPF for my vehicle</option>
                    <option value="complaint">I have a product complaint or issue</option>
                    <option value="feedback">I have a general question or feedback</option>
                  </Select>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Tell us about your inquiry</FormLabel>
                  <Textarea placeholder="Write your message here" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Submit
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          {children}
          {!isAdminRoute && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
