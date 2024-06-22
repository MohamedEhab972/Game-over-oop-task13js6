let x = document.querySelectorAll("#nav ul li a");
let information = document.getElementById("information");
let information0 = document.getElementById("information0");
let coNav = document.getElementById("coNav");
class Display {
  async displayHome() {
    let box = "";
    for (let i = 0; i < array.length; i++) {
      box += `<div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 py-3 d-flex justify-content-center align-items-center d-md-block">
              <div data-id="${
                array[i].id
              }" class="card p-2 d-flex flex-column justify-content-center">
                <img
                  src="${array[i].thumbnail}"
                  class="card-img-top w-100"
                  alt="..."
                />
                <div class="card-body pb-0">
                  <div class="head d-flex justify-content-between py-2">
                    <h5 class="card-title text-white">${array[i].title}</h5>
                    <a href="#" class="btn btn-primary">Free</a>
                  </div>
                  <p class="card-text text-center d-flex align-items-center">
                    ${array[i].short_description
                      .split(" ")
                      .slice(0, 13)
                      .join(" ")}
                  </p>
                  <div
                    class="tail mb-0 pb-0 d-flex justify-content-between py-2 border-top"
                  >
                    <a href="#" class="btn btn-gray">${array[i].genre}</a>
                    <a href="#" class="btn btn-gray">${array[i].platform}</a>
                  </div>
                </div>
              </div>
          </div>`;
    }
    document.getElementById("row").innerHTML = box;
  }
  displayDetails() {
    let box = `<div class="col-md-4">
            <img  class="w-100 mb-3" src="${array1.thumbnail}" alt="" />
          </div>
          <div id="infoD" class="col-md-8 text-white">
            <h3>Title: ${array1.title}</h3>
            <p class="p1">Category: <span>${array1.genre}</span></p>
            <p class="p2">Platform: <span>${array1.platform}</span></p>
            <p class="p3">Status: <span>${array1.status}</span></p>
            <p class="p4">
            ${array1.description}
            </p>
            <a href="${array1.freetogame_profile_url}"><button id="button1" type="button" class="btn btn-outline-warning">
              Show Game
            </button></a>
          </div>`;
    document.getElementById("row1").innerHTML = box;
  }

  async dp() {
    let info1 = new HomeApi();
    await info1.getInfo(active[0].innerHTML);
    let display1 = new Display();
    display1.displayHome();
    let cards = document.getElementsByClassName("card");
    let icon = document.getElementById("icon");
    icon.addEventListener("click", function () {
      information.classList.add("d-none");
      coNav.classList.remove("d-none");
      information0.classList.remove("d-none");
    });
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", async function (e) {
        let displayD = new DetailsApi();
        await displayD.getDtInfo(cards[i].getAttribute("data-id"));
        display1.displayDetails();
        information.classList.remove("d-none");
        coNav.classList.add("d-none");
        information0.classList.add("d-none");
      });
    }
  }
}

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", async function (e) {
    for (let i = 0; i < x.length; i++) {
      if (x[i].classList.contains("active")) {
        x[i].classList.remove("active");
      }
    }
    x[i].classList.add("active");
    let info = new HomeApi();
    await info.getInfo(e.target.innerHTML);
    let display = new Display();
    display.displayHome();
    display.dp();
  });
}
