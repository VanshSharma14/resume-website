import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "playlist-visibility.json");

const normalizeIds = (value) => {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item) => typeof item === "string" && item.trim().length > 0))];
};

export const readVisiblePlaylistIds = async () => {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return normalizeIds(parsed?.selectedPlaylistIds);
  } catch {
    return null;
  }
};

export const writeVisiblePlaylistIds = async (selectedPlaylistIds) => {
  const ids = normalizeIds(selectedPlaylistIds);
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(
    DATA_FILE,
    JSON.stringify(
      {
        selectedPlaylistIds: ids,
        updatedAt: new Date().toISOString(),
      },
      null,
      2
    ),
    "utf8"
  );
  return ids;
};
