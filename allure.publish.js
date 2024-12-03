const { reportToAllure } = require("allure-service-client");
const { resolve } = require("path");
const fs = require("fs");
const archiver = require("archiver");

const folderPath = resolve(__dirname, `allure-results`);
const archivePath = resolve(__dirname, `allure-results.zip`);

const compressResults = async () => {
  const output = fs.createWriteStream(archivePath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  return new Promise((resolve, reject) => {
    output.on("close", () => {
      console.log(`Results compressed to: ${archivePath}`);
      resolve();
    });
    archive.on("error", (err) => {
      console.error("Error compressing results:", err);
      reject(err);
    });

    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
  });
};

const uploadResults = async () => {
  try {
    await compressResults();

    const options = {
      project: "project 1",
      resultsFolder: folderPath,
      cleanupFilesAfterUpload: false,
      host: "http://34.173.128.142:5050",
    };

    await reportToAllure(options);
    console.log("Allure results uploaded successfully!");
  } catch (e) {
    console.error("Error uploading results:", e.message);
  }
};

uploadResults();

