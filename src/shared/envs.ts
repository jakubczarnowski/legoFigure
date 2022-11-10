export const Envs = {
	API_KEY: import.meta.env.VITE_API_KEY,
	BASE_URL: import.meta.env.VITE_BASE_URL,
} as const;
if (!Envs.API_KEY) {
	throw new Error("API_KEY is not defined");
}
if (!Envs.BASE_URL) {
	throw new Error("BASE_URL is not defined");
}
