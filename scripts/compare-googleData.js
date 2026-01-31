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

function sortObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(sortObject);
  } else if (obj && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((result, key) => {
        result[key] = sortObject(obj[key]);
        return result;
      }, {});
  }
  return obj;
}

const strippedNew = stripUpdateTime(newData);
const strippedRepo = stripUpdateTime(repoData);
const a = JSON.stringify(sortObject(strippedNew));
const b = JSON.stringify(sortObject(strippedRepo));

console.log("Porównanie obiektów po usunięciu update_time i sortowaniu kluczy:");
console.log("newData:", JSON.stringify(sortObject(strippedNew), null, 2));
console.log("repoData:", JSON.stringify(sortObject(strippedRepo), null, 2));

if (a === b) {
  console.log("Pliki różnią się tylko polem update_time na branchu data.");
  process.exit(0); // tylko update_time się różni
} else {
  console.log("Pliki różnią się istotnymi danymi (nie tylko update_time) na branchu data.");
  process.exit(2); // są inne zmiany
}
