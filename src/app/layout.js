'use client';
import "./globals.css";
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
import React, { useState } from "react";
import axios from "axios";


const sora = Sora({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [isEnquirySubmitting, setIsEnquirySubmitting] = useState(false)

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const metadata = {
    title: "CAMIO PPF – Best Paint Protection Film (PPF) in Delhi | Self-Healing, Ultra Gloss, Durable",
    description: "Protect your vehicle's paint with CAMIO's top-tier Paint Protection Film (PPF) in Delhi. Our self-healing, non-yellowing films offer superior defense against scratches, road debris, and environmental elements, ensuring a flawless, high-gloss finish. Explore customizable options with a 5-year warranty. We are the best PPF provider in Delhi NCR region",
  };

  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  const validateForm = () => {
    if (!name.trim() || !phone.trim() || !location.trim() || !purpose.trim()) {
      toast({
        title: "Please fill all required fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }

    if (email && !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast({
        title: "Invalid email address",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }

    if (!/^[+]?\d{10,15}$/.test(phone)) {
      toast({
        title: "Invalid phone number",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsEnquirySubmitting(true)

    const formData = {
      name: name.trim(),
      email: email.trim() || null,
      phone: phone.trim(),
      location: location.trim(),
      purpose: purpose.trim(),
      businessName: businessName.trim() || null,
      businessType: businessType.trim() || null,
      inquiryMessage: inquiryMessage.trim() || null,
    };

    try {
      const response = await axios.post("/api/inquiries", formData);

      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Form submitted successfully!",
          description: "We have received your inquiry.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setPurpose("");
        setBusinessName("");
        setBusinessType("");
        setInquiryMessage("");
        setIsEnquirySubmitting(false)
        onClose();
      } else {
        throw new Error("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsEnquirySubmitting(false)

      toast({
        title: "Submission failed.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="8BBCQjlVUQwQR3e57lXgew" async></script>
      </head>
      <body className={`${sora.className} antialiased overflow-x-hidden relative`}>
        <Providers>
          {!isAdminRoute && <Navbar />}
          {isAdminRoute ? '' : <button
            onClick={onOpen}
            className=" text-3xl lg:text-5xl fixed right-10 bottom-10 cursor-pointer text-yellow-400"
          >
            <IoChatbubbleEllipsesOutline />
          </button>}

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Inquiry Form</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    placeholder="Your Email (Optional)"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input
                    placeholder="City, State"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Purpose of Inquiry</FormLabel>
                  <Select
                    placeholder="Select an option"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    <option value="dealer">I want to become a dealer</option>
                    <option value="buy">I want to buy CAMIO PPF for my vehicle</option>
                    <option value="complaint">I have a product complaint or issue</option>
                    <option value="feedback">I have a general question or feedback</option>
                  </Select>
                </FormControl>

                {purpose === "dealer" && (
                  <>
                    <FormControl mt={4}>
                      <FormLabel>Business Name</FormLabel>
                      <Input
                        placeholder="Your Business Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Type of Business</FormLabel>
                      <Select
                        placeholder="Select type"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                      >
                        <option value="detailing">Detailing Store</option>
                        <option value="wholesaler">Wholesaler</option>
                        <option value="distributor">Distributor</option>
                        <option value="others">Others</option>
                      </Select>
                    </FormControl>
                  </>
                )}

                <FormControl mt={4}>
                  <FormLabel>Tell us about your inquiry</FormLabel>
                  <Textarea
                    placeholder="Write your message here"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button isLoading={isEnquirySubmitting} colorScheme="blue" mr={3} onClick={handleSubmit}>
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
