export const articles = [
  {
    articleId: "1",
    eventId: "1",
    title: "Artikel 1",
    author: "userId1",
    date: {
      added: "25.09.2019",
      updated: "11.10.2019",
      published: ""
    },
    categories: ["Fussball", "Herren", "1. Mannschaft"],
    text:
      "Aber der Reihe nach: Am vorletzen Spieltag der Saison 2018/19 ging es mit einem 5 Punkte Vorsprung vor der SpVgg Zolling zum TSV Au II. Wir konnten uns also mit einem Sieg die vorzeitige Meisterschaft sichern.",
    media: {
      images: {
        main:
          "https://images.unsplash.com/photo-1518657205760-dafa7ef924de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        gallery: ["imageId1", "imageId2", "imageId3"]
      },
      videos: ["videoId1", "videoId2", "videoId3"],
      audio: ["audioId1", "audioId2", "audioId3"]
    }
  }
];
