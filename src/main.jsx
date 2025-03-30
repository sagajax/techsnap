import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./DarkMode/ThemeProvider.jsx";
import {store as realStore} from './store/index.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={realStore}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
    <Toaster />
  </Provider>
);

