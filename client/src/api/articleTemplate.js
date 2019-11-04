// Imported data
import { todaysDate } from "../lib/date";

export const articleTemplate = {
  eventId: "",
  title: "",
  author: "Peter Zwegert",
  date: {
    added: todaysDate,
    updated: todaysDate,
    published: ""
  },
  categories: ["Volleyball", "Damen", "2. Mannschaft"],
  content: "",
  media: {
    images: {
      main:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      gallery: []
    },
    videos: [],
    audio: []
  }
};
