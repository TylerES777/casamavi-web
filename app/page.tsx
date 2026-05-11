import { DietaryNotice } from "@/components/sections/DietaryNotice";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { Hero } from "@/components/sections/Hero";
import { HoursBlock } from "@/components/sections/HoursBlock";
import { LocationSection } from "@/components/sections/LocationSection";
import { ReservationBlock } from "@/components/sections/ReservationBlock";
import { ThreePillars } from "@/components/sections/ThreePillars";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HoursBlock />
      <ThreePillars />
      <FeaturedDishes />
      <DietaryNotice />
      <ReservationBlock />
      <LocationSection />
    </main>
  );
}
