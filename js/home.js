let active = document.getElementsByClassName("active");
array = [];
class HomeApi {
  async getInfo(activee) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fd90eb0f77mshe3de97c35131870p1ad9cejsn71a7e2479fa9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${activee}`,
      options
    );
    const resp = await api.json();
    array = resp;
    // console.log(array);
  }
  async dd() {
    let info1 = new HomeApi();
    await info1.getInfo(active[0].innerHTML);
    let display1 = new Display();
    display1.displayHome();
    display1.dp();
  }
}
let homeapi = new HomeApi();
homeapi.dd();
