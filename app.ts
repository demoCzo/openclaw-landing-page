const tabs = document.querySelectorAll<HTMLButtonElement>(".plan-tab");
const individualPanel = document.getElementById("panel-individual");
const teamPanel = document.getElementById("panel-team");

function activateTab(selected: HTMLButtonElement) {
  for (const tab of tabs) {
    const isSel = tab === selected;
    tab.setAttribute("aria-selected", String(isSel));
    tab.tabIndex = isSel ? 0 : -1;
  }
  const id = selected.id;
  if (id === "tab-individual") {
    individualPanel?.removeAttribute("hidden");
    teamPanel?.setAttribute("hidden", "");
  } else {
    teamPanel?.removeAttribute("hidden");
    individualPanel?.setAttribute("hidden", "");
  }
}

for (const tab of tabs) {
  tab.addEventListener("click", () => activateTab(tab));
}
