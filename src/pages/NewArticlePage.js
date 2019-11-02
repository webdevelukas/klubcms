// Imported dependencies
import React from "react";
import useGetEvents from "../hooks/useGetEvents";

// Imported functions
import { handlePostArticle } from "../lib/handlePostArticle";

// Imported components
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button from "../components/Button";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import EventsDropdown from "../components/EventsDropdown";
import Input from "../components/Input";
import Form from "../components/Form";

// Imported data
import { todaysDate } from "../lib/date";

export default function NewArticlePage() {
  const events = useGetEvents();

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
          <Form onSubmit={event => handlePostArticle(event)}>
            <EventsDropdown />
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
