  "use strict";

  class App{
    constructor(){
      this.ed = [
        
        {
          "id": 1,
          "name": "The Slumdon Bridge",
          "description": "Album: The Slumdon Bridge <br> Year: 2012 <br> Songs: <br><br> London Bridge, You Don't Know(For Fuck's Sake), Faces, Outro",
          "image": "img/photo6.jpg",
        },
        {

          "id": 2,
          "name": "Loose Change",
          "description": "Album: Loose Change <br> Year: 2010 <br> Songs: <br><br>Let It Out, Homeless, Little Bird, Sofa, One Night, Firefly, The City ",
          "image": "img/photo5.jpg",
        },
        {

          "id": 3,
          "name": "Number 5. Collaborations Project",
          "description": "Album: Number 5. Collaborations Project <br> Year: 2011 <br> Songs: <br><br>Latels, You, Family, Radio, Little Lady, Drown Me Out, Nightmares, <br>Goodbye To You",
          "image": "img/photo4.jpg",
        },
         {

          "id": 4,
          "name": "Songs I Wrote with Amy",
          "description": "Album: Songs I Wrote with Amy <br> Year: 2010 <br> Songs: <br><br>Fall, Fire Alarms, Where We Land, Cold Coffee, She",
          "image": "img/photo3.jpg",
        },
  
         {

          "id": 5,
          "name": "+",
          "description": "Album: + <br> Year: 2011 <br> Songs: <br><br> The A Team, Drunk, U.N.I, Grade 8, Wake Me Up,<br> Small Bump, This, The City, Lego House,<br> You Need Me, I Don't Need you, Kiss Me, Give Me Love",
          "image": "img/photo2.jpg",
        },
        {

          "id": 6,
          "name": "X",
          "description": " Album: X <br> Year: 2014 <br> Songs: <br><br> One,   I'm a Mess,   Sing,   Don't,   Nina,   Photograph,   Bloodstream,   Tenerife Sea,   Runaway,   The Man,   Thinking Out Loud,   Afire Love,   Take it Back,   Shirtsleeves,    Even My Dad Does Sometimes,    I See Fire,   All of the Stars ",
          "image": "img/photo.jpg",
        },

      ];
        


    
    }



    render(html, component){

      component.innerHTML += html;
    }

    reRender(html, component){

      component.innerHTML = html;
    }

    albumDesign(){
      let id = document.getElementById('kill');
      let name = document.getElementById('kill2');
      let description = document.getElementById('kill3');
      let image = document.getElementById('kill4');
    

      let ed = {      
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
       
      };


      this.ed.push(ed);

      
      id.value = name.value = description.value = image.value = ''; 
    } 

    albumDelete(key){
      let r = this.ed;
      for(let i=0;i<r.length;i++){
        if(r[i].id == key){
          this.ed.splice(i,1);
          break;
        }
      }   
      this.albumList();
    }

    SearchAlbumById(id){
      let r = this.ed;
      for(let i=0;i<r.length;i++){
        if(id==r[i].id){
          return r[i];
        }
      }
    } 

    SearchAlbum(name){
      let objects = [];
      let r = this.ed;
      for(let i=0;i<r.length;i++){
        let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
        if(expr){
          objects.push(r[i]);
        }
      }
      return objects;
    }


  }

  class Component extends App{
    constructor(){
      
      super();
    }

    albumDesignLayout(){
      let html = `
       
    <nav>
      <div class="nav-wrapper  cyan">
		<img src="img/photo.jpg" width="60px">
        <a href="#" onclick="component.Homepage()" class="brand-logo"> &nbsp&nbsp&nbsp&nbsp Ed's Album Garage </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <li><a href="#" onclick="component.Homepage()">Home</a></li>
            <li><a href="#" onclick="component.albumList()">Albums</a></li>  
            <li><a href="#" onclick="component.latestAlbum()">Add</a></li>
            
          </ul>

          
        </div>
      </nav>


  </div>


           <div id="Homepage"></div>
          <div id="albumRecent"></div>
          <div id="viewAlbum"></div>
          <div id="albumList"></div>
          <div id="latestAlbum"></div>
          
                    <footer class="page-footer  cyan">
            <div class="container">
              <div class="row">
     
                  
                           

                </div>
                <center>
                <div class="col l4 offset-l2 s12 ">
                  <h5 class="white-text "> copyright 2016</h5>
                  </div>
                 
             
              
              </div>
            </div>
    
     <div class="footer-copyright">
              <center>
               <ul>All Rights Reserved</ul>
              </center>  
              </div>
            </div>
            
          </footer>

      `;

      this.reRender(`
        ${html}

        `,document.getElementById("app"));
      this.albumRecent();    
    }

   

    viewAlbum(id){
      let r = this.SearchAlbumById(id);

      let html = `


   



        <h5 class="center-align">${r.name}</h5>
        <div class="row">       
          <div class="col s12 m12">
            <div class="card horizontal small">	
              <div class="card-image">
                <img src="${r.image}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>${r.description}</p>
                </div>
              <div class="card-action small">               
                  <span onclick="component.albumDelete(${r.id})" class="new badge small red" data-badge-caption="">Delete</span>
                 <span onclick="component.albumList()" class="new badge small" data-badge-caption="">Albums</span>
                </div>            
              </div>     
            </div>   
            
          </div>      
        </div>
      `;

      this.reRender(`   
        ${html}     
        `,document.getElementById("viewAlbum"));
      $('#viewAlbum').show();
      $('#albumRecent').hide();
      $('#albumList').hide();
      $('#latestAlbum').hide();

        $('#Homepage').hide();
    }

    albumList(){
      let html = `




        <br/>
          <nav>
            <div class="nav-wrapper white">
            <form>
              <div class="input-field">       
                <input onkeyup="component.albumItems(this.value)" id="search" type="search" placeholder="Search" required>
                <label for="search"><i class="material-icons">...</i></label>
                <i class="material-icons">cancel</i>
              </div>
            </form>
          </div>
        </nav>
        <br/>

      `;

      html += `
        <div class="row" id="albumItems">
      `;
      let r = this.ed;
      for(let i=0;i<r.length;i++){
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewAlbum(${r[i].id})">Show More</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.reRender(`
        ${html}
        `,document.getElementById("albumList"));
      $('#albumList').show();
      $('#viewAlbum').hide();
      $('#albumRecent').hide();
      $('#latestAlbum').hide();    
           $('#Homepage').hide();
    }

    albumItems(name){
      let html = ``;
      let r = this.SearchAlbum(name);
      for(let i=0;i<r.length;i++){
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewAlbum(${r[i].id})">Show More</a>
              </div>
            </div>
          </div>
        `;
      }   
      this.reRender(`
        ${html}
        `,document.getElementById("albumItems"));
      $('#albumList').show();
      $('#viewAlbum').hide();
      $('#albumRecent').hide();  
      $('#latestAlbum').hide();
          $('#Homepage').hide();    
    }


     albumRecent(){
      
      let html = `

      

      
               <div class="row">
      `;

      let r = this.ed;
      let count = 0;
      for(let i=(r.length-1);i>=0;i--){
        if(count++ === 6)break;
        html+= `
          <div class="col s12 m4">
            <div class="card small hoverable">
              <div class="card-image">
                <img src="${r[i].image}">
                <span class="card-title">${r[i].name}</span>
              </div>
              <div class="card-content">
                <p>${r[i].description}</p>
              </div>
              <div class="card-action">
                <a href="#" onclick="component.viewAlbum(${r[i].id})">Show more</a>
              </div>
            </div>
          </div>
        `;
      }

      html += `</div>`;

      this.render(`   
        ${html}
        `,document.getElementById("albumRecent"));
    }

    latestAlbum(){
      let html = `

     
       
            
         <div class="col">
              <div class="input-field col s6 ">
                <input disabled value="${this.ed.length+1}" id="kill" type="text"class=" vintage" >
              </div>
                <div align="center">
            <div class="input-field col s6 ">
                <input id="kill2" type="text" class=" vintage">
                <label for="kill2">Enter Name of Album:</label>
              </div>
            </div>
            
            <div align="center">
              <div class="input-field col s6 ">
                <input id="kill3" type="text" class="deep-white lighten-1">
               <label for="kill3">Enter Songs in Album:</label>
              </div>

            <div align="center">
              <div class="input-field col s6 ">
                <input id="kill4" type="text" class="deep-white lighten-1">
                <label for="kill4"> Enter Album Image:</label>
              </div>
          <div align="center">
         <button onclick="component.Homepage()" class="btn waves-effect waves-light">Cancel</button>
        
               <button onclick="component.albumDesign()" class="btn waves-effect waves-light">Save</button>
           </div>
       
           
          
        

      `;

      this.reRender(`
        ${html}
        `,document.getElementById("latestAlbum"));
      $('#latestAlbum').show();
      $('#albumList').hide();
      $('#viewAlbum').hide();
      $('#albumRecent').hide(); 
      $('#Homepage').hide();    
    }




  Homepage(){
    let html=`



    `;
     this.reRender(`
        ${html}
        `,document.getElementById("latestAlbum"));
      $('#latestAlbum').hide();
      $('#albumList').hide();
      $('#viewAlbum').hide();
      $('#albumRecent').show();  
      $('#Homepage').hide();  

  }


  } 
  let component = new Component();
  component.albumDesignLayout();