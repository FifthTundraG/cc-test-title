const buttonContents = {
    none: document.getElementById("bttnContentNone"),
    newGame: document.getElementById("bttnContentNewGame"),
    loadGame: document.getElementById("bttnContentLoadGame"),
    mods: document.getElementById("bttnContentMods"),
    settings: document.getElementById("bttnContentSettings")
};

const buttons = {
    newGame: document.getElementById("buttonNewGame"),
    loadGame: document.getElementById("buttonLoadGame"),
    mods: document.getElementById("buttonMods"),
    settings: document.getElementById("buttonSettings")
}

// dialogs
const addModDialog = document.getElementById("dialogAddMod");

function sidebarButtonPressed(button, content) {
    for (const buttonName in buttons) {
        buttons[buttonName].style.fontWeight = "normal";
    }

    button.style.fontWeight = "bold";

    for (const contentName in buttonContents) {
        buttonContents[contentName].style.display = "none";
    }

    content.style.display = "block";
}

document.getElementById("buttonNewGame").addEventListener("click", () => {
    sidebarButtonPressed(document.getElementById("buttonNewGame"), buttonContents.newGame);
});
document.getElementById("buttonLoadGame").addEventListener("click", () => {
    sidebarButtonPressed(document.getElementById("buttonLoadGame"), buttonContents.loadGame);
});
document.getElementById("buttonMods").addEventListener("click", () => {
    sidebarButtonPressed(document.getElementById("buttonMods"), buttonContents.mods);
});
document.getElementById("buttonSettings").addEventListener("click", () => {
    sidebarButtonPressed(document.getElementById("buttonSettings"), buttonContents.settings);
});

// --- mods ---
document.getElementById("addModButton").addEventListener("click", () => {
    addModDialog.showModal();
});
document.getElementById("exitDialogAddModButton").addEventListener("click", () => {
    addModDialog.close();
});