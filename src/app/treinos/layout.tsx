import Footer from "@/components/layout/footer/footer";

export default function TrainersLayout({
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
