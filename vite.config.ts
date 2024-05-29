import { defineConfig } from "vite";

export default defineConfig(() => {
	return {
		mode: "development",
		server: { port: 3000 },
		test: {
			watch: false,
			environment: "happy-dom",
		},
	};
});
