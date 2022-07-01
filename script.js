const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

//click event listener for the about tab
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id; //event target method to target the 'data-id' using dataset/ 'id keyword'
  console.log(e.target);

  if (id) {
    //if the target id is clicked, then remove the classlist 'active' to the previous and add the classlist 'active to the current target
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles by using the remove classlist method
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
