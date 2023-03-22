import { initChat } from "./components/chat";

const chat = initChat();

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "²") {
    chat.classList.toggle("hidden");
  }
});
