// Imported dependencies / functions
import React from "react";
import PropTypes from "prop-types";
import { getArticle } from "../api/fetch";
import { articleTemplate } from "../api/articles";

// Imported components / icons
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

  // Can I use mongoose for this?
  const [article, setArticle] = React.useState(articleTemplate);

  React.useEffect(() => {
    getArticle(articleId).then(fetchedArticle => setArticle(fetchedArticle));
  }, [articleId]);

  return (
    <>
      <Menu />
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
        <h2>Event</h2>
        <Form>
          <DropdownFullWidth defaultValue={article.eventId}>
            <option value={article.eventId}>{article.eventId}</option>
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
    </>
  );
}

EditArticlePage.propTypes = {
  match: PropTypes.object,
  article: PropTypes.object
};
