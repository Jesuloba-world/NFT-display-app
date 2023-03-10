import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteTsconfigPaths(), svgr({ exportAsDefault: true })],
	// define: {
	// 	global: {},
	// },
});
