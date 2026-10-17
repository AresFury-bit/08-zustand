import css from "./stores/CreateNote.module.css";
import { NoteForm } from "@/components/NoteForm/NoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Create Note`,
  description: `Create and save a new note in NoteHub with automatic draft preservation.`,
  openGraph: {
    title: `Create Note`,
    description: `Create and save a new note in NoteHub with automatic draft preservation.`,
    url: `https://notehub.com/`,
    images: [
      {
        url: `https://ac.goit.global/fullstack/react/notehub-og-meta.jpg`,
        height: 1200,
        width: 630,
        alt: `notehub image`,
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
