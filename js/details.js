array1 = [];
class DetailsApi {
  async getDtInfo(activee) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fd90eb0f77mshe3de97c35131870p1ad9cejsn71a7e2479fa9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${activee}`,
      options
    );
    const resp = await api.json();
    array1 = resp;
    // console.log(array1);
  }
}
