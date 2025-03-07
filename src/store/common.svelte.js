export let globalVariables = $state({
    isDarkTheme: false,
});

export function handleTheme () {
    globalVariables.isDarkTheme = !globalVariables.isDarkTheme;
    if (globalVariables.isDarkTheme) {
        window.document.body.classList.add('dark');
        console.log("The current theme is dark !");
    } else {
        window.document.body.classList.remove('dark');
        console.log("The current theme is light !");
    }
}