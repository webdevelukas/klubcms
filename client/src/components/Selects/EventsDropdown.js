// Imported dependencies
import React from "react";
import PropTypes from "prop-types";

// Imported components
import { DropdownFullWidth } from "./Dropdown";

export default function EventsDropdown({ events, ...props }) {
  return (
    <DropdownFullWidth name="eventId" {...props}>
      {events.map(event => {
        return (
          <option key={event._id} name={event.name} value={event._id}>
            {event.date} :: {event.name}
          </option>
        );
      })}
    </DropdownFullWidth>
  );
}

EventsDropdown.propTypes = {
  events: PropTypes.array
};
