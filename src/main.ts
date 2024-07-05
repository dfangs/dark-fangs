import * as fs from "node:fs/promises";
import type chroma from "chroma-js";
import { DARK_FANGS } from "./themes/fangs.js";

function isColor(value: unknown): value is chroma.Color {
  return (
    typeof value === "object" &&
    value !== null &&
    "hex" in value &&
    typeof value.hex === "function"
  );
}

const THEMES_DIR = "./themes";

await fs.mkdir(THEMES_DIR, { recursive: true });

await Promise.all(
  [DARK_FANGS].map((theme) =>
    fs.writeFile(
      `${THEMES_DIR}/${theme.name.toLowerCase().replace(" ", "-")}.json`,
      JSON.stringify(theme, (_, value) => (isColor(value) ? value.hex() : value), 2),
    ),
  ),
);
