import Footer from "@/components/layout/footer/footer";

export default function PlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
