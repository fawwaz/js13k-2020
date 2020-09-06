import { app } from "hyperapp";
import Screen from "components/screen";

app({
  init: {
    counter: 0,
  },
  view: Screen,
  node: document.getElementById("app"),
});
