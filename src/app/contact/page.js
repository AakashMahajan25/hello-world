import React from 'react'
import Form from '@/components/contact/form'
import Map from '@/components/contact/map'
import Head from 'next/head'

const page = () => {
  return (
    <div>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Contact Us | CAMIO PPF</title>
        <meta name="description" content="Have questions? Get in touch with CAMIO PPF. Reach us via email at ppf.camio@gmail.com or visit our office at Alipur, Delhi. We’re here to assist you with all your vehicle protection needs." />
        <meta name="keywords" content="Contact CAMIO PPF, Get in touch, vehicle protection inquiries, Rudra Enterprises contact, Alipur Delhi, Paint Protection Film support" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Us | CAMIO PPF" />
        <meta property="og:description" content="Reach out to CAMIO PPF for inquiries about our Paint Protection Films. Visit us at Alipur, Delhi or email at ppf.camio@gmail.com." />
        <meta property="og:image" content="/path/to/contact-image.jpg" />
        <meta property="og:url" content="https://www.camioppf.com/contact" />
        
        <meta property="instagram:title" content="camioppf" />
        <meta property="instagram:description" content="Shield your vehicle with CAMIO’s top-tier Paint Protection Film, trusted by professionals worldwide." />
        <meta property="instagram:image" content="https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-19/460485117_7810580399045933_4463468894215397570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fKs9rVZNXwwQ7kNvgGFCyut&_nc_gid=31bfaf4104544070ac9e6754a9f123c4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBs3sgMUVEHPpz6nzZbGht1u7Oqlj2iF_lQwN3OOIw4IQ&oe=67510808&_nc_sid=8b3546" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.camioppf.com/contact" />
        
        {/* Structured Data for Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CAMIO PPF",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Right Portion, KHASRA NO. 29/23, Theke Wali Gali, Near Sai Baba Mandir",
                "addressLocality": "Alipur",
                "addressRegion": "Delhi",
                "postalCode": "110036",
                "addressCountry": "IN"
              },
              "email": "mailto:ppf.camio@gmail.com",
              "url": "https://www.camioppf.com/contact"
            }
          `}
        </script>
      </Head>
      
      {/* Page Content */}
      <Form />
      <Map />
    </div>
  )
}

export default page
