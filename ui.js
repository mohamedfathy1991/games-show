const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac57dbe144msh1b7cf41ae3ff422p17282djsna199af6985d3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

let card = document.getElementById("card");
let details = document.getElementById("details");

export class Showdata {
  static async FetchData(
    url = "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter"
  ) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  static async showByGategory(cat = "mmorpg") {
    let data = await Showdata.FetchData(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat} `
    );
    card.innerHTML = "";
    Showdata.putDatInHtml(data);
  }

  static putDatInHtml(data) {
    card.innerHTML = "";
    // why cant send the item ass object
    for (let item of data) {
      card.innerHTML += `
    <div class="col-lg-3 g-3 col-md-6">
    <div  class="card  h-100 " >
      <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text   overflow-hidden">${item.short_description}</p>
        <div class="d-flex justify-content-between border-top fw-bolder">
        <p>${item.platform}</p>
        <p>${item.genre}</p>
        </div>
        
        <a onclick="SendDetailsItemID(${item.id})" class="btn btn-primary">open details</a>
      </div>
    
   
  </div>
  
  </div>
    `;
    }
  }
}
