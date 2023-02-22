import PageLayout from "@/src/components/Layout";
import { Hero } from "@/src/components/molecules/Hero";
import HowItWorks from "@/src/components/molecules/HowItWorks";
import NewBikes from "@/src/components/molecules/NewBikes";

export const HomeView = () => {
  return (
    <PageLayout title="Home">
      <Hero />
      <HowItWorks />
      <NewBikes />
    </PageLayout>
  );
};
