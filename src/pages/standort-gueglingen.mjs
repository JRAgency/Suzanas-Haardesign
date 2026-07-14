import { locations } from "../data.mjs";
import { standortPage } from "../standort.mjs";

const l = locations.find((x) => x.id === "gueglingen");
const other = locations.find((x) => x.id === "brackenheim");

export default standortPage(l, other);
