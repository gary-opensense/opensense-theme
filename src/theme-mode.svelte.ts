// Light/dark state for the page. index.html applies the saved (or OS) theme before first paint;
// this mirrors it so components that need the mode as a prop (e.g. the Sonner toaster) can follow.
export const theme = $state({ dark: document.documentElement.classList.contains("dark") });

export function toggleTheme() {
	theme.dark = !theme.dark;
	document.documentElement.classList.toggle("dark", theme.dark);
	try {
		localStorage.setItem("theme", theme.dark ? "dark" : "light");
	} catch {}
}
