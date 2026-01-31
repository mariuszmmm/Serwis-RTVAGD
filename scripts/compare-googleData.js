const fs = require("fs");
const path = require("path");

const newPath = path.join(__dirname, "../public/googleData.json");
const repoPath = path.join(__dirname, "../public/googleData.repo.json");

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (e) {
    return null;
  }
}

const newData = readJson(newPath);
const repoData = readJson(repoPath);

function stripUpdateTime(obj) {
  if (!obj) return null;
  const { update_time, ...rest } = obj;
  return rest;
}

if (!newData || !repoData) {
  console.log("Brak plików do porównania na branchu data.");
  process.exit(1); // nie porównuj, jeśli brakuje plików
}

const a = JSON.stringify(stripUpdateTime(newData));
const b = JSON.stringify(stripUpdateTime(repoData));

if (a === b) {
  console.log("Pliki różnią się tylko polem update_time na branchu data.");
  process.exit(0); // tylko update_time się różni
} else {
  console.log("Pliki różnią się istotnymi danymi (nie tylko update_time) na branchu data.");
  process.exit(2); // są inne zmiany
}
