import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { EntriesProvider } from "../context/entries";
import { UIProvider } from "../context/ui";
import { lightTheme, darkTheme } from "../themes";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
