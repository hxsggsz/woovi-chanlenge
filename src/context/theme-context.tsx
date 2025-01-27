import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, ReactNode, useMemo } from "react";

export interface ThemeContextProps {
  mode: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeManagerProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useLocalStorage("@theme", prefersDarkMode);

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prev) => !prev);
      },
      mode,
    }),
    [mode, setMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
          primary: {
            main: "#133A6F",
          },
          info: {
            main: "#E5E5E5",
            50: "rgba(229, 229, 229, 1)",
            "800": "#B2B2B2",
            "900": "#4D4D4D",
          },
          secondary: {
            main: "#03D69D",
            "50": "rgba(3, 214, 157, 0.1)",
          },
          error: {
            main: red.A400,
          },
        },
        typography: {
          fontFamily: ["Nunito", "Roboto", "sans-serif"].join(","),
          button: {
            textTransform: "none",
          },
        },
      }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
