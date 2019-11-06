// Import dependencies
import React from "react";
import useGetEvents from "../hooks/useGetEvents";
import usePostArticle from "../hooks/usePostArticle";

// Import components
import MainArea from "../components/Container/MainArea";
import Menu from "../components/Navigation/Menu";
import FunctionBar from "../components/FunctionBar/FunctionBar";
import Button from "../components/Buttons/Button";
import Textarea, { TextareaWithBoldText } from "../components/Inputs/Textarea";
import EventsDropdown from "../components/Selects/EventsDropdown";
import Input from "../components/Inputs/Input";
import Form from "../components/Container/Form";

// Import data
import { todaysDate } from "../lib/date";

export default function NewArticlePage() {
  const events = useGetEvents();
  const handlePostArticle = usePostArticle();

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
            <EventsDropdown events={events} />
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
            <Input type="file" multiple />
            <hr />
            <Button>Save article</Button>
          </Form>
        </MainArea>
      )}
    </>
  );
}
