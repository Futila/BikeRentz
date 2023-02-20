import PageLayout from "@/src/components/Layout";
import { Hero } from "@/src/components/molecules/Hero";
import HowItWorks from "@/src/components/molecules/HowItWorks";

export const HomeView = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <HowItWorks />
    </PageLayout>
  );
};
