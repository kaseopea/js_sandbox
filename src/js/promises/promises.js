const APIS = {
  randomJoke:
    "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke",
  topTenJokes:
    "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten",
  randomImage: "https://picsum.photos/200/300/?random"
};
const contentsEl = document.getElementById("contents");
const dataDelay = 2000;

function getData(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(APIS.randomJoke));
      // reject('Can nott get any data');
    }, delay);
  });
}

function getImage(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(APIS.randomImage));
      // reject('Can nott get any data');
    }, delay);
  });
}

// Getting data with promise
// getData(dataDelay)
//   .then(res => res.json())
//   .then(data => {
//     contentsEl.innerHTML = `
//         <div class="jumbotron">
//             <div class="jumbotron-pic">Loading...</div>
//             <div class="jumbotron-meta">
//                 <h1 class="display-5">${data.setup}</h1>
//                 <p class="lead">${data.punchline}</p>
//             </div>
//         </div>
//     `;
//     return getImage(dataDelay);
//   })
//   .then(data => data.url)
//   .then(imageUrl => {
//     const picEl = document.getElementsByClassName('jumbotron-pic')[0];

//     picEl.innerHTML = `
//         <img src="${imageUrl}" />
//     `;
//   })
//   .catch(err => console.warn(err));

// Promise.all implementation
const metadataPromise = getData().then(res => res.json());
const imagePromise = getImage().then(res => res.url);

Promise.all([metadataPromise, imagePromise])
  .then(data =>
    Promise.resolve({
      ...data[0],
      imageUrl: data[1]
    })
  )
  .then(data => {
    contentsEl.innerHTML = `
        <div class="jumbotron">
            <div class="jumbotron-pic"><img src="${data.imageUrl}"/></div>
            <div class="jumbotron-meta">
                <h1 class="display-5">${data.setup}</h1>
                <p class="lead">${data.punchline}</p>
            </div>
        </div>
    `;
  });
