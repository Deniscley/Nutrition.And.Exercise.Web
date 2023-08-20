import FAQs from "@/components/layout/faqs/faqs";
import MainHeader from "@/components/layout/mainHeader/mainHeader";
import Programs from "@/components/layout/programs/programs";
import Values from "@/components/layout/values/values";
import React from "react";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
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
