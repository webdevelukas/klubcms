// Imported dependencies
import React from "react";
import useGetEvents from "../hooks/useGetEvents";

// Imported components
import { DropdownFullWidth } from "./Dropdown";

export default function EventsDropdown() {
  const events = useGetEvents();

  return (
    <DropdownFullWidth name="eventId">
      {events.map(event => {
        return (
          <option key={event.id} name={event.name} value={event.id}>
            {event.date} :: {event.name}
          </option>
        );
      })}
    </DropdownFullWidth>
  );
}
