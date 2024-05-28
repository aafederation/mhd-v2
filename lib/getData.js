import fs from "fs";
import path from "path";
import matter from "gray-matter";
import toml from "toml";

// Exported functions
function getSortedData(memberType) {
  const fileNames = getAllFilenames(memberType);

  // Get file names under /posts
  const allPostsData = fileNames
    .map((fileName) => getSingleProvider(fileName, memberType))
    .filter((x) =>
      process.env.NODE_ENV === "development" ? true : x.draft ? false : true
    )
    .filter((provider) => provider.locations)
    .reduce((allProviders, provider) => {
      provider.locations.forEach((element) => {
        allProviders.push({ ...provider, location: element });
      });
      return allProviders;
    }, []);

  // Sort posts by date
  return allPostsData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getAllProviderIds(memberType) {
  const fileNames = getAllFilenames(memberType);
  return fileNames.map((fileName) => ({
    params: {
      slug: getIdFromFilename(fileName),
    },
  }));
}

function getSingleProviderFromSlug(slug, memberType) {
  const fileNames = getAllFilenames(memberType);
  const fileName = fileNames.find(
    (fileName) => getIdFromFilename(fileName) === slug
  );
  return getSingleProvider(fileName, memberType);
}

/*
 * getAllParameters
 */
function getAllDataParameters(dataFolder = "data") {
  const fileNames = getAllFilenames(dataFolder);
  const allData = fileNames.reduce((accumulatedData, currentFileName) => {
    const currentFile = getParameters(currentFileName, dataFolder);
    accumulatedData[getIdFromFilename(currentFileName)] = currentFile;
    return accumulatedData;
  }, {});
  return allData;
}

// Secondary function
function getSingleProvider(fileName, memberType) {
  const id = getIdFromFilename(fileName);
  // Read markdown file as string
  const fileContents = getFileContent(memberType, fileName);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, {
    delims: ["+++", "+++"],
    lang: "toml",
    engines: {
      toml: toml.parse.bind(toml),
    },
  });
  const content = matterResult.content;

  // Combine the data with the id
  return {
    id,
    content,
    ...matterResult.data,
  };
}

function getFileContent(folder, fileName, encoding = "utf8") {
  const postsDirectory = getContentDir(folder);

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, encoding);
  return fileContents;
}

function getParameters(paramType, folder) {
  const fileContentJSON = getFileContent(folder, paramType);
  const fileContent = JSON.parse(fileContentJSON);
  return fileContent.Items.sort();
}

// Helper functions
function getAllFilenames(memberType) {
  const postsDirectory = getContentDir(memberType);
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((filter) => !filter.startsWith("."));

  return fileNames;
}

function getContentDir(memberType) {
  const contentDir = `content/${memberType}`;
  const postsDirectory = path.join(process.cwd(), contentDir);
  return postsDirectory;
}

function getIdFromFilename(fileName) {
  // Remove ".md" from file name to get id
  const id = fileName
    .replace(/\.md$/, "")
    .replace(/\.json$/, "")
    .replace(/[\s+_]/g, "-")
    .toLowerCase();
  // .replace(/'_'/g, "-");
  return id;
}

export {
  getSortedData,
  getAllProviderIds,
  getSingleProviderFromSlug,
  getAllDataParameters,
};
