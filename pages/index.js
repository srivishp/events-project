import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      {/* <Head> not <head> */}
      <Head>
        <title>NextJS Events</title>
        {/* Data in the meta tags is important as search engines display it when results are found */}
        <meta name="description" content="Attend many interesting events!" />
      </Head>
      <EventList items={featuredEvents} />;
    </>
  );
}

export default HomePage;
