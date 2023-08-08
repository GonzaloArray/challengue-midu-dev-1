import React, { useMemo, useState } from "react";
import { Book } from "../types/book.type";
import { books, max_pages } from "../service/book";

export const useReadList = () => {
  const [genre, setGenre] = useState("");
  const [range, setRange] = useState(max_pages);
  const [readList, setReadList] = useState<Book[]>(
    () => JSON.parse(window.localStorage.getItem("readList") || "[]") as Book[]
  );

  const matches = useMemo(() => {
    if (!genre) return books.filter((book) => book.pages < range);

    return books.filter((book) => {
      if (book.genre !== genre || book.pages > range) return false;

      return true;
    });
  }, [genre, range]);

  const handleSelectBook = (book: Book) => {
    const draft = readList.map((e) => e.ISBN).includes(book.ISBN)
      ? readList.filter((readBook) => readBook.ISBN !== book.ISBN)
      : [...readList, book];

    setReadList(draft);
    localStorage.setItem("readList", JSON.stringify(draft));
  };

  const handleSelectedRanges: React.MouseEventHandler<HTMLInputElement> = (
    e
  ) => {
    setRange(parseInt(e.currentTarget.value));
  };

  function updateReadList() {
    const read = JSON.parse(
      window.localStorage.getItem("readList") || "[]"
    ) as Book[];
    setReadList(read);
  }

  return {
    updateReadList,
    handleSelectedRanges,
    handleSelectBook,
    setGenre,
    matches,
    readList,
    range,
    genre
  }
};
