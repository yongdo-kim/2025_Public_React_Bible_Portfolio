import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // 돋보기 아이콘 import
import { Column } from "./Column";
interface SearchBarProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ placeholder, onChange }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태 관리

  return (
    <Column className="items-center">
      <div className="relative container max-w-md">
        <FaSearch
          className={`absolute top-1/2 left-4 -translate-y-1/2 transform ${
            isFocused ? "dark:text-emerald-600" : "text-gray-500"
          }`}
        ></FaSearch>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-full border-2 border-gray-400 py-2 pr-3 pl-10 placeholder:text-gray-500 focus:border-emerald-600 focus:outline-none dark:border-gray-600 dark:text-gray-300 dark:focus:border-emerald-600"
          onFocus={() => setIsFocused(true)} //포커스
          onBlur={() => setIsFocused(false)} //해제
          onChange={onChange}
        />
      </div>
    </Column>
  );
};
