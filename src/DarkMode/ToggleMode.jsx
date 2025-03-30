import { Moon, Sun } from "lucide-react";

import { Button } from "../components/ui/button";

import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Moon className="h-[1.5rem] w-[1.5rem] transition-all text-white" />
      ) : (
        <Sun className="h-[1.5rem] w-[1.5rem] transition-all text-black" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
