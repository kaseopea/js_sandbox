const FILES_LIST = [
  "diplom.doc",
  "funny.jpg",
  "secret.txt",
  "pict.png",
  "icon.svg"
];
function readFile(fileName) {
  setTimeout(() => console.warn(fileName), 2000 * Math.random());
}

async function readFiles(files) {
  for (const file of files) {
    await readFile(file);
  }
}

// readFiles(FILES_LIST).then(data => {
//   if (data) {
//     console.warn(data);
//   }
// });

const readFilesReduce = function(files) {
  return files.reduce((p, file) => {
    return p.then(() => readFile(file));
  }, Promise.resolve()); // initial
};

readFilesReduce(FILES_LIST).then(data => {
  console.log(data);
});
