// Imported dependencies
import React from "react";
import PropTypes from "prop-types";
import useGetEvents from "../hooks/useGetEvents";
import useGetArticle from "../hooks/useGetArticle";

// Imported functions
import { handlePatchArticle } from "../lib/handlePatchArticle";

// Imported components
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button from "../components/Button";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import Gallery from "../components/Gallery";
import Form from "../components/Form";
import Input from "../components/Input";
import EventsDropdown from "../components/EventsDropdown";

export default function EditArticlePage({ match }) {
  const articleId = match.params.articleId;

  console.log(match.params);

  const article = useGetArticle(articleId);
  const events = useGetEvents();

  return (
    <>
      <Menu />
      {/* Load MainArea if the content is arrived, otherwise write message "Loading Content" */}
      {!article && !events && "Loading Content"}
      {article && events && (
        <MainArea>
          <h1>What do you want to edit?</h1>
          <hr />

          <FunctionBar>
            <div>
              Date added: <b>{article.date.added}</b>
            </div>
            <div>
              Date updated: <b>{article.date.updated}</b>
            </div>
          </FunctionBar>
          <Form onSubmit={event => handlePatchArticle(event, articleId)}>
            <h2>Event</h2>
            <EventsDropdown events={events} defaultValue={article.eventId} />
            <h2>Title</h2>
            <TextareaWithBoldText
              name="title"
              type="text"
              placeholder="What are you talking about?"
              defaultValue={article.title}
            />
            <h2>Content</h2>
            <Textarea
              name="content"
              type="text"
              placeholder="What you wanna tell the people out there?"
              defaultValue={article.content}
            />
            <h2>Photos</h2>
            <Gallery articleGallery={article.media.images.gallery} />
            <Input name="images" type="file" multiple />
            <hr />
            <Button>Save Article</Button>
          </Form>
        </MainArea>
      )}
    </>
  );
}

EditArticlePage.propTypes = {
  match: PropTypes.object
};
