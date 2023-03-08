import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "styled.config";
import { QueryClient, QueryClientProvider } from "react-query";
import Moralis from "moralis";

const queryClient = new QueryClient();

let initialized = false;

const initializeSDK = async () => {
	await Moralis.start({
		apiKey: import.meta.env.VITE_MORALIS_API_KEY,
	});
};

if (!initialized) {
	initializeSDK();
	initialized = true;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
);
