

let api_key = "28513853-38f6fcb17cd6626e03947feca";
let container = document.getElementById("images-wrapper");


$("#search-form").submit(function (e) {
  var searchedKeyword = document.getElementById("searchbar").value;
  console.log(searchedKeyword);
  container.innerHTML = "";

  axios
    .get(
      `https://pixabay.com/api/?key=${api_key}&q=${searchedKeyword}&image_type=photo&min_width=500px&min_height=500px`
    )
    .then((res) => {
      let images = res.data.hits;
      localStorage.setItem("images_data",JSON.stringify(images))
      console.log(images);
      displayImages();
    })
    .catch((error) => console.log(error));
  e.preventDefault();

  searchedKeyword = "";
});

function displayImages() {
    let images=JSON.parse(localStorage.getItem("images_data"))
  console.log(images);

  images.map((item, i) => {
    container.innerHTML += ` <div class="image-container"  id=${i}>
              <img src=${item.previewURL} alt="" class="image"/>
              <button class="add-caption-btn" onclick="onclickhandler('${item.id}')">Add Caption</button>
              </div>`;
  });
}

function onclickhandler(id){

        window.location = `http://127.0.0.1:5500/editImage.html?id=${id}`;



}



