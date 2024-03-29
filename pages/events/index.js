import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import Head from "next/head";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    //? Next JS Smart feature
    // for one argument, the [...eventSlug] will not be used
    // since [eventId] already exists for a single value
    // [...eventSlug] only works if more than one arg is present
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>Events List</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
