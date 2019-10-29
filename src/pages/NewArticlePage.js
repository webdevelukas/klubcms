// Imported dependencies
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Imported components
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button from "../components/Button";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import { DropdownFullWidth } from "../components/Dropdown";
import Input from "../components/Input";
import Form from "../components/Form";
import { getEvents } from "../api/fetch";
import { articleTemplate } from "../api/articleTemplate";

// Imported data
import { paths } from "../lib/paths";
import { todaysDate } from "../lib/date";

export default function NewArticlePage() {
  const history = useHistory();
  const [events, setEvents] = useState(false);

  function redirectTo(path) {
    history.push(path);
  }

  function handleSubmit(event) {
    const formData = Object.fromEntries(new FormData(event.target).entries());
    const data = Object.assign(articleTemplate, formData);
    fetch(`/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    redirectTo(paths.submitPage);
  }

  useEffect(() => {
    getEvents().then(fetchedEvents => {
      setEvents(fetchedEvents);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Menu />
      {/* Load MainArea if the content is arrived, otherwise write message "Loading Content" */}
      {!events && "Loading Content"}
      {events && (
        <MainArea>
          <h1>Keep on smiling while creating your new article</h1>
          <hr />
          <FunctionBar>
            <div>
              Date: <b>{todaysDate}</b>
            </div>
          </FunctionBar>
          <h2>Event</h2>
          <Form onSubmit={event => handleSubmit(event)}>
            <DropdownFullWidth name="eventId">
              {events.map(event => {
                return (
                  <option key={event.id} name={event.name} value={event.id}>
                    {event.date} :: {event.name}
                  </option>
                );
              })}
            </DropdownFullWidth>
            <h2>Title</h2>
            <TextareaWithBoldText
              name="title"
              type="text"
              placeholder="What are you talking about?"
            />
            <h2>Content</h2>
            <Textarea
              name="content"
              type="text"
              placeholder="What you wanna tell the people out there?"
            />
            <h2>Photos</h2>
            <Input name="images" type="file" multiple />
            <hr />
            <Button>Save article</Button>
          </Form>
        </MainArea>
      )}
    </>
  );
}
