import PageHeader from "@/components/layout/PageHeader";
import EventsCurated from "@/components/events/EventsCurated";
import EventsGallery from "@/components/events/EventsGallery";
import MenuOfferCard from "@/components/menu/MenuOfferCard";
import EventsOffers from "@/components/events/EventsOffers";
import { OFFERS_DATA } from "@/components/menu/MenuData";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-el-messiri">
      <PageHeader 
        title="EVENTS & SPECIALS"
        subtitle="Planning a visit, hosting an event, or have something in mind, we're here to help make it all come together."
      />

      {/* 2. Curated Dining Experiences (Hero Section) */}
      <EventsCurated />

      {/* 3. Exclusive Offers Slider Section */}
      <EventsOffers />

      {/* 4. Filterable Events Gallery (Experiences Section) */}
      <EventsGallery />
      
    </div>
  );
}
