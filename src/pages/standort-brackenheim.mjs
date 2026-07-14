import { locations } from "../data.mjs";
import { standortPage } from "../standort.mjs";

const l = locations.find((x) => x.id === "brackenheim");
const other = locations.find((x) => x.id === "gueglingen");

export default standortPage(l, other);
