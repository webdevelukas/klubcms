import { useEffect, useState } from "react";
import { getEvents } from "../api/events";

export default function useGetEvents() {
  const [events, setEvents] = useState(false);

  useEffect(() => {
    getEvents().then(fetchedEvents => {
      setEvents(fetchedEvents);
    });

    // eslint-disable-next-line
  }, []);

  return events;
}
