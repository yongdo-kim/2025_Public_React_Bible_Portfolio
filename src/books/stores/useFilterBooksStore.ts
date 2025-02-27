import { create } from "zustand";
import { BookEntity } from "../entities/book.entity"; // Adjust the import path as necessary

interface FilterBooksState {
  searchTerm: string;
  hasData: boolean;
  filteredBooks: BookEntity[];
  setSearchTerm: (term: string, data: BookEntity[]) => void;
}

export const useFilterBooksStore = create<FilterBooksState>((set) => ({
  searchTerm: "",
  hasData: false,
  filteredBooks: [],
  setSearchTerm: (term, data) => {
    const filtered = (data || []).filter((book) =>
      book.bookName.toLowerCase().includes(term.toLowerCase()),
    );
    set({
      searchTerm: term,
      hasData: term !== "" && filtered.length > 0,
      filteredBooks: filtered,
    });
  },
}));
