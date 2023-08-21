import FAQs from "@/components/layout/faqs/faqs";
import Footer from "@/components/layout/footer/footer";
import MainHeader from "@/components/layout/mainHeader/mainHeader";
import Programs from "@/components/layout/programs/programs";
import Testimonials from "@/components/layout/testimonials/testimonials";
import Values from "@/components/layout/values/values";
import React from "react";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
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
