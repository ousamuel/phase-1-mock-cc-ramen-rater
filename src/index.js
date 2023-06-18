// write your code here
document.addEventListener("DOMContentLoaded", () => {
  const ramenForm = document.getElementById("new-ramen");
  /*
  1) fetch the api and load everything after page loads from the json 
  using a get request
    fetch api : http://localhost:3000/ramens
    end points: 
        /ramens
        /ramens/:id
  2) on top image click, set the inner html of the MAIN img to empty
  and replace with the selected top image
  */
  fetch(`http://localhost:3000/ramens`)
    .then((res) => res.json())
    .then((data) => data.forEach((data) => loadRamen(data)));

  // const img = document.getElementsByClassName("detail-image")[0];      const img = document.getElementsByClassName("detail-image")[0];
  const bigImg = document.querySelector("div .detail-image");
  // const name = document.getElementsByClassName("name")[0];
  const name = document.querySelector("div .name");
  // const rest = document.getElementsByClassName("restaurant")[0];
  const rest = document.querySelector("div .restaurant");
  const rating = document.getElementById("rating-display");
  const comment = document.getElementById("comment-display");
  function displayRamen(data) {
    comment.innerHTML = data.comment;
    rating.innerHTML = data.rating;
    bigImg.src = data.image;
    name.innerHTML = data.name;
    rest.innerHTML = data.restaurant;
  }

  function loadRamen(data) {
    const img = document.createElement("img");
    img.src = data.image;
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.append(img);

    img.addEventListener("click", (e) => {
      e.preventDefault();
      displayRamen(data);
    });
  }

  function addRamen() {
    const ramenData = {
      name: document.getElementById("new-name").value,
      restaurant: document.getElementById("new-restaurant").value,
      image: document.getElementById("new-image").value,
      rating: document.getElementById("new-rating").value,
      comment: document.getElementById("new-comment").value,
    };
    loadRamen(ramenData);
    displayRamen(ramenData);

  }

  const createBtn = document.querySelector("form input[type=submit]");
  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addRamen();
    document.getElementById("new-name").value = '';
    document.getElementById("new-restaurant").value = '';
    document.getElementById("new-image").value = '';
    document.getElementById("new-rating").value = '';
    document.getElementById("new-comment").value = '';
    
    console.log("test");
  });
});

// const configObject = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify(ramenData)
// }

// fetch(`http://localhost:3000/ramens`, configObject)
//   .then(res => res.json())
//   .then(data => console.log(data));
