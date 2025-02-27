import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDarkModeStore } from "./darkModeStore";


export const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  const handleToggle = () => {
    toggleDarkMode();
  };

  if (isDarkMode) {
    return (
      <MdOutlineDarkMode
        className="h-6 w-6 cursor-pointer text-amber-400 hover:text-amber-300"
        onClick={handleToggle}
      />
    );
  } else {
    return (
      <MdOutlineLightMode
        className="h-6 w-6 cursor-pointer text-red-600 hover:rounded-full hover:text-red-400"
        onClick={handleToggle}
      />
    );
  }
};
