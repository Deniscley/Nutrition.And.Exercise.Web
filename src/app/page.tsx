import FAQs from "@/components/layout/faqs/faqs";
import MainHeader from "@/components/layout/mainHeader/main-header";
import Programs from "@/components/layout/programs/programs";
import Testimonials from "@/components/layout/testimonials/testimonials";
import Values from "@/components/layout/values/values";
import WhatsappButton from "@/components/layout/whatsappButton/whatsapp-button";
import React from "react";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }
