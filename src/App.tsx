import { useEffect } from "react";
import { Title } from "./components/Title";
import { useReadList } from "./hook/useReadList";
import { books, genres, max_pages, min_pages } from "./service/book";
import { LibraryBook } from "./models/LibraryBook";

export default function App() {
  const {
    setGenre,
    genre,
    readList,
    matches,
    handleSelectBook,
    handleSelectedRanges,
    updateReadList,
  } = useReadList();

  useEffect(() => {
    window.addEventListener("storage", updateReadList);

    return () => window.removeEventListener("storage", updateReadList);
  }, [updateReadList]);

  return (
    <main className="sm:container mx-auto p-5">
      <Title>
        Midulibritos - Cantidad disponible: {books.length - readList.length}
      </Title>

      <div className="flex justify-center">
        <div className="my-5">
          <h2 className="text-2xl text-lime-500">Filtrar por genero</h2>
          <div className="flex gap-5 items-center mt-4 flex-wrap">
            <select
              className="p-2 rounded-2xl"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option selected value="">Todos</option>
              {genres.map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-bold">Filtrar por pagina menor a: </h2>
              <span>{min_pages} paginas</span>
              <input
                className="p-2"
                type="range"
                min={min_pages}
                max={max_pages}
                onMouseUp={handleSelectedRanges}
              />
              <span>{max_pages} paginas</span>
            </div>
          </div>
        </div>
      </div>

      <LibraryBook
        matches={matches}
        readList={readList}
        handleSelectBook={handleSelectBook}
      />

      <Title>Midulibritos - Cantidad disponible: {readList.length}</Title>

      <LibraryBook matches={readList} handleSelectBook={handleSelectBook} />
    </main>
  );
}
