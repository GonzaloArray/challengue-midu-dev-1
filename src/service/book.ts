import data from "../../books.json";
import { Book } from "../types/book.type";

export const books: Book[] = data.library.map((data) => data.book);
export const genres: string[] = Array.from(new Set(books.map((book) => book.genre)));
export const pages: number[] = Array.from(new Set(books.map((book) => book.pages)));

export const min_pages: number = Math.min(...pages);
export const max_pages: number = Math.max(...pages);