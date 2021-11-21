

// /* Sidebar */ 


$('#side-toggle-btn').click( function() {
 
    let x = $("#side-toggle-btn-icon").attr('class');
     
    if (x == "fa fa-align-justify"){

    $("#sidebar").css({    
        left: '0rem',
    }); 
    $(".anmi").animate({
        opacity: '1',
        top: '0px',
    },{
        duration: 1500,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
          },
    }
        );
    $("#side-toggle-btn-icon").attr('class', 'fas fa-times');
    return false;
    }

    else if (x == "fas fa-times") {
        $("#sidebar").css({    
            left: '-13.5rem',
            
        }); 

        $(".anmi").animate({
            opacity: '0',
            top: '100%',
        }, {
            duration: 750,
    
    
            specialEasing: {
                width: "linear",
                height: "easeOutBounce"
              },
    
    
        }
            );


        $("#side-toggle-btn-icon").attr('class', 'fa fa-align-justify');
        return false;
    }
});



// /* End of Sidebar */

/* API */ 


         
let nowPlaying =document.getElementById("nowPlaying");
let popular =document.getElementById("popular");
let topRated =document.getElementById("topRated");
let trending =document.getElementById("trending");
let upcoming =document.getElementById("upcoming");
let headTitle = document.getElementById("section-title");
    
let filmsContainer = ``;

let films = [];
let containero = document.getElementById("filmsConto");
let response="";


function mainHead(type){
    headTitle.innerHTML= type;
    headTitle.style.opacity='0';
    $(headTitle).animate({
        opacity: '1',
    }, {
        duration: 150,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
     }, } );
}
mainHead("Now Playing");

async function getFilms(category) {
     let response = await fetch(`${category}`);
    let data = await response.json();
    films=data.results;
    displayFilms();
     
}

function displayFilms(){
    let filmsContainer = ``;
    for(let i=0;i<films.length;i++){

        filmsContainer += ` <div class="col-12 col-md-6 col-lg-4 conto" id="conto">
        <div class="item content-item" id="content-item">
          <img src="https://image.tmdb.org/t/p/original${films[i].poster_path}" class="w-100" alt="" />
          <div class="content-info" id="content-info">
            <h3 id="title">${films[i].original_title}</h3>
            <p id="note">
             ${films[i].overview}
            </p>
            <p id="rete">rate: ${films[i].vote_average}</p>
            <p id="date">${films[i].release_date}</p>
          </div>
        </div>
      </div>`;

    }
    containero.innerHTML=filmsContainer;
    
};

getFilms("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");


nowPlaying.addEventListener("click",function(){
    containero.innerHTML='';
    getFilms("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    mainHead("Now Playing");
   
    });



popular.addEventListener("click",function(){
    containero.innerHTML='';
    getFilms("https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    mainHead("Popular");
    
});

topRated.addEventListener("click",function(){
    containero.innerHTML='';
    getFilms("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k","");
    mainHead("Top Rated");
  
});

trending.addEventListener("click",function(){
    containero.innerHTML='';
    getFilms("https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI","");

    mainHead("Trending");
    
});

upcoming.addEventListener("click",function(){
    containero.innerHTML='';
    getFilms("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k","Up Coming");
    mainHead("Up Coming");
    
});


/* End of API */ 

/* Contact Validation */ 

let emailo = document.getElementById("contact-email");
let emailInvalid = document.getElementById("contact-email-invalid");
let phoneo = document.getElementById("contact-phone");
let phoneInvalid = document.getElementById("contact-phone-invalid");
let ageo = document.getElementById("contact-age");
let ageInvalid = document.getElementById("contact-age-invalid");
let passOne =document.getElementById("contact-password-one");
let passInvalidOne = document.getElementById("contact-password1-invalid");
let passTwo =document.getElementById("contact-password-two");
let passInvalidTwo = document.getElementById("contact-password2-invalid");




/* Email */ 
function ValidateEmail(input2) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input2.value.match(validRegex)) {

        emailInvalid.innerHTML="";
       
      return true;
  
    } else {

        if(emailo.value!=""){
            
            emailInvalid.innerHTML="Invalid email address!";
          
            
        }
        else if (emailo.value==""){
            emailInvalid.innerHTML="";
            
            
        };
        return false;
    }
  
  }

  emailo.addEventListener('blur',function(){
 
     ValidateEmail(emailo);
  });


  /* Phone */ 

  

  
function  ValidatePhone(input3) {

    var validRegex = /^01[0-2,5]{1}[0-9]{8}$/;
  
    if (input3.value.match(validRegex)) {

        phoneInvalid.innerHTML="";
        
      return true;
  
    } else {

        if(phoneo.value!=""){
            
            phoneInvalid.innerHTML="Invalid phone Number!";
          
            
        }
        else if (phoneo.value==""){
            phoneInvalid.innerHTML="";
           
            
        };
        return false;
    }
  
  }

 phoneo.addEventListener('blur',function(){
 
    ValidatePhone(phoneo);
 });


 /* Age */ 


function ValidateAge(input4) {

    var validRegex = /^[1-9]?[0-9]{1}$|^100$/;
  
    if (input4.value.match(validRegex)) {

        ageInvalid.innerHTML="";
        
      return true;
  
    } else {

        if(ageo.value!=""){
            
            ageInvalid.innerHTML="Invalid age!";
          
            
        }
        else if (ageo.value==""){
            ageInvalid.innerHTML="";
            
            
        };
        return false;
    }
  
  }

  ageo.addEventListener('blur',function(){
    ValidateAge(ageo);
 });


/* Password 1 */ 


let passOneValueforRe ="";

function ValidatepassOne(input5) {

    var validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    if (input5.value.match(validRegex)) {

        passInvalidOne.innerHTML="";
        passOneValueforRe = input5.value;
        
       
      return true;
  
    } else {

        if(passOne.value!=""){
            
            passInvalidOne.innerHTML="Invalid password<br>Your password 6 to 16 valid characters, it doesn't validate that it has at least a number, and at least a special character. ";

        }
        else if (passOne.value==""){
            passInvalidOne.innerHTML="";
            
  
        };
        return false;
    }

    
  
  }

  passOne.addEventListener('blur',function(){
 
    ValidatepassOne(passOne);
  });





/* Password 2 */ 




function ValidatepassTwo(input6) {

    var validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  
    if (input6.value.match(validRegex)&&input6.value==passOneValueforRe) {
        passInvalidTwo.innerHTML="Matching &#10003;";
        passInvalidOne.innerHTML="  &#160;     ";
        $("#contact-password2-invalid").addClass("valid");

      return true;
  
    } else {
              

        if(passTwo.value!=""){
            
               if(passOne.value==""){
                passInvalidTwo.innerHTML="Enter your first password";
                passInvalidOne.innerHTML="  &#160;     ";
                $("#contact-password2-invalid").removeClass("valid");
                 $("#contact-password2-invalid").addClass("invalid");
               }
              else {
                 passInvalidTwo.innerHTML="Re-type your password &#10060;";
                 passInvalidOne.innerHTML="  &#160;     ";
                 $("#contact-password2-invalid").removeClass("valid");
              $("#contact-password2-invalid").addClass("invalid");
                };
                return false;
            
        }
        else if (passTwo.value==""){
            passInvalidTwo.innerHTML="";
            passInvalidOne.innerHTML="";

        };
        return false;
    }
  
  }

  passTwo.addEventListener('blur',function(){
 
    ValidatepassTwo(passTwo);
  });



/* End of Contact Validation */


/* Search */ 

let searchLocal = document.getElementById("local");
let searchGlobal = document.getElementById("global");
let dataLocal = '';
let dataGlobal = '';
let filmsContainer2 ='';
let filmsContainer3 ='';
let filmsAll =[];

/* Local Search */ 

searchLocal.addEventListener('keyup',function(){
    filmsContainer2 ='';
    dataLocal = searchLocal.value;
    // dataLocal = dataLocal.toLowerCase();
    local();
});

function local(){
   for (i=0;i<films.length;i++){
     if(films[i].original_title.includes(dataLocal)){

        filmsContainer2 += ` <div class="col-12 col-md-6 col-lg-4 conto" id="conto">
        <div class="item content-item" id="content-item">
          <img src="https://image.tmdb.org/t/p/original${films[i].poster_path}" class="w-100" alt="" />
          <div class="content-info" id="content-info">
            <h3 id="title">${films[i].original_title}</h3>
            <p id="note">
             ${films[i].overview}
            </p>
            <p id="rete">rate: ${films[i].vote_average}</p>
            <p id="date">${films[i].release_date}</p>
          </div>
        </div>
      </div>`;    
      containero.innerHTML=filmsContainer2;
     }
     else{
     };

   }
}




/* Global Search */ 

let allData = ``;

async function getFilmsAll() {
   let response2 = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
   let response3 = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
   let response4 = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
   let response5 = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
   
   let data2 = await response2.json();
   let data3 = await response3.json();
   let data4 = await response4.json();
   let data5 = await response5.json();

    
   filmsAll=data2.results;
   filmsAll.push(...data3.results);
   filmsAll.push(...data4.results);
   filmsAll.push(...data5.results);
   
  return filmsAll;
   
}

getFilmsAll();

searchGlobal.addEventListener('keyup',function(){
    filmsContainer3 ='';
    dataGlobal = searchGlobal.value;
    // dataGlobal = dataGlobal.toLowerCase();
    console.log("2")
    global();
});

function global(){
   for (i=0;i<filmsAll.length;i++){
     if(filmsAll[i].original_title.includes(dataGlobal)){

        filmsContainer3 += ` <div class="col-12 col-md-6 col-lg-4 conto" id="conto">
        <div class="item content-item" id="content-item">
          <img src="https://image.tmdb.org/t/p/original${filmsAll[i].poster_path}" class="w-100" alt="" />
          <div class="content-info" id="content-info">
            <h3 id="title">${filmsAll[i].original_title}</h3>
            <p id="note">
             ${filmsAll[i].overview}
            </p>
            <p id="rete">rate: ${filmsAll[i].vote_average}</p>
            <p id="date">${filmsAll[i].release_date}</p>
          </div>
        </div>
      </div>`;    
    
      containero.innerHTML=filmsContainer3;
     }
     else{
        containero.innerHTML='<h1 class="text-center ">No Matching Search Items</h1>';
     };

   }
}


/* End of Search */ 