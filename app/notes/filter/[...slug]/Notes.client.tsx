"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";
import css from "./Notes.client.module.css";
import Pagination from "@/components/Pagination/Pagination";
import { useRouter } from "next/navigation";

interface NotesClientProps {
  initialPage: number;
  initialSearch: string;
  tag?: string;
}

const NotesClient = ({ initialPage, initialSearch, tag }: NotesClientProps) => {
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState(initialSearch);
  const router = useRouter();
  const { data: note } = useQuery({
    queryKey: ["notes", page, search, tag],
    queryFn: () => fetchNotes(page, search, tag),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
  console.log(note);

  const handleButtonClick = () => {
    router.push("/notes/action/create");
  };

  const handleChange = useDebouncedCallback((search: string) => {
    setSearch(search);
    setPage(1);
    console.log(search);
  }, 300);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox search={(search: string) => handleChange(search)} />
        {note && note?.totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={note.totalPages}
            setPage={setPage}
          />
        )}
        <button onClick={handleButtonClick} className={css.button}>
          Create note +
        </button>
      </header>
      {note && note.notes.length > 0 && <NoteList notes={note.notes} />}
    </div>
  );
};

export default NotesClient;
