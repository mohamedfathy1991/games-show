
let dettails =document.getElementById('details')

export class Details {
  static async fetchDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ac57dbe144msh1b7cf41ae3ff422p17282djsna199af6985d3",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  static async showDetailsItem(id){
      let  data= await Details.fetchDetails(id)
      
            dettails.innerHTML=`
            
            <div id="api-detail">
            <div class="d-flex justify-content-between">
              <h2>more details</h2>
              <i onclick='closeDetail()' id="closedetails" class="fa-solid fa-xmark fs-2 text-info"></i>
            </div>
            <div class="row">
             
                <div class="col-md-6">
                  <div >
                    <img id="img-details" src="${data.thumbnail
                    }" />
                  </div>
                </div>
                <div class="col-md-6 ">
                  <div>
                    <h3 id="item-title">title: ${data.title}</h3>
                    <h4 id="item-title">category: ${data.genreqqqqq}</h>
                    <h4 id="item-title">platform: ${data.platform}</h>
                    <h4 >status: ${data.status}</h4>
                    <p id="item-description"><span class=" fs-4">description: </span>${data.description}</p>
                  </div>
                
              </div>
            </div>
          </div>
            
            `

      
     


  }
}
// click on card item to show details
function SendDetailsItemID(id){
  //  hidden card and show details
      card.classList.add('d-none')
      dettails.classList.remove('d-none')
      Details.showDetailsItem(id)

      // hiden nav bar
      navhide.classList.add('d-none')

      
       
    
        
    
    }

    // close icon which show details and show home
    function closeDetail(){
      card.classList.remove('d-none')
      dettails.classList.add('d-none')
      // show nav bar

      navhide.classList.remove('d-none')

      
       
    
        
    
    }



 window.SendDetailsItemID=SendDetailsItemID
 window.closeDetail=closeDetail
    
    