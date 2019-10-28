// Imported dependencies / functions
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getArticle, getEvents } from "../api/fetch";

// Imported components
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button from "../components/Button";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import Gallery from "../components/Gallery";
import { DropdownFullWidth } from "../components/Dropdown";
import Form from "../components/Form";
import Input from "../components/Input";

export default function EditArticlePage({ match }) {
  const {
    params: { articleId }
  } = match;

  const [article, setArticle] = useState(false);
  const [events, setEvents] = useState(false);

  useEffect(() => {
    getArticle(articleId).then(fetchedArticle => setArticle(fetchedArticle));
    getEvents().then(fetchedEvents => {
      setEvents(fetchedEvents);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Menu />
      {/* Load MainArea if the content is arrived, otherwise write message "Loading Content" */}
      {article && events ? (
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
          <Form>
            <h2>Event</h2>
            <DropdownFullWidth defaultValue={article.eventId}>
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
              placeholder="What are you talking about?"
              defaultValue={article.title}
            />
            <h2>Text</h2>
            <Textarea
              placeholder="What you wanna tell the people out there?"
              defaultValue={article.content}
            />
            <h2>Photos</h2>
            <Gallery articleGallery={article.media.images.gallery} />

            <Input type="file" multiple />

            <hr />
            <Button>Save Article</Button>
          </Form>
        </MainArea>
      ) : (
        "Loading Content"
      )}
    </>
  );
}

EditArticlePage.propTypes = {
  match: PropTypes.object,
  article: PropTypes.object
};
