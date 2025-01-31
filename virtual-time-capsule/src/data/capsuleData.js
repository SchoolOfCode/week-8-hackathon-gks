// array of objects with id, name, title, content, imageurl, datesubmitted, opendate
// could use uuidv4() for generating IDs
import { v4 as uuidv4 } from "uuid";

const formattedDate = new Date(Date.now()).toLocaleDateString("en-GB");

const capsules = [
  {
    id: uuidv4(),
    userName: "Kit Jones",
    title: "Memories Remix",
    content: "A memory of recently releasing my remix of Memories",
    imageUrl: "/memories.png",
    dateSubmitted: formattedDate,
  },
];

export default capsules;
