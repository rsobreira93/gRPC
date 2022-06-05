import { Note } from "./proto/notes_pb";
import { INotesServer } from "./proto/notes_grpc_pb";

const notes: Note.AsObject[] = [
  { id: 1, title: "Note 1", description: "Content 1" },
  { id: 2, title: "Note 2", description: "Content 2" },
];
