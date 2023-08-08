import { Book } from "../types/book.type";

interface Props {
  matches: Book[],
  readList?: Book[],
  handleSelectBook: (book: Book) => void
}

export const LibraryBook = ({matches, readList = [], handleSelectBook}: Props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
      {matches.map((book) => (
        <div
          key={book["ISBN"]}
          className={`cursor-pointer ${
            readList.map((e) => e.ISBN).includes(book.ISBN) ? "opacity-50" : ""
          }`}
          onClick={() => handleSelectBook(book)}
        >
          <img
            className="w-full aspect-[10/16]"
            width={120}
            height={320}
            src={book.cover}
            alt={book.title}
          />
          <div className="flex p-2 bg-slate-400">
            <h2 className="font-bold">{book.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
