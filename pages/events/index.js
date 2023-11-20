import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    //? Next JS Smart feature
    // for one argument, the [...slug] will not be used
    // since [eventId] already exists for a single value
    // [...slug] only works if more than one arg is present
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
