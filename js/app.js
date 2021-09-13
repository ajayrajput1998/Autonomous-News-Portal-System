$(document).ready(function () {
   $.ajax({
       url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
       success:function (data) {
           $('#main-headline-img1').attr("src",data.articles[3].urlToImage);
           $('#main-headline-title1').text(data.articles[3].title);
           $('#main-headline-source1').text(data.articles[3].source.name);
           $('#main-headline-img2').attr("src",data.articles[1].urlToImage);
           $('#main-headline-title2').text(data.articles[1].title);
           $('#main-headline-source2').text(data.articles[1].source.name);
           $('#main-headline-img3').attr("src",data.articles[2].urlToImage);
           $('#main-headline-title3').text(data.articles[2].title);
           $('#main-headline-source3').text(data.articles[2].source.name);
           //console.log(data.articles[0].title);
           
           
       },
       error:function () {
           alert("some error occured");
       }
   });

   $.ajax({
    
        url:"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
       success:function (data) {
           for(let i=0;i<4;i++){
               $('#corona-news').append(`
                <div class="col-3">
                  <div class="card">
                   <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                   <div class="card-body">
                       <h5 class="card-title">${data.articles[i].title}</h5>
                       <p class="text-info">${data.articles[i].source.name}</p>
                       <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                   </div>

               </div>

           </div>
           
           `)
         } 
       },
       error:function () {
           alert("Error");
       }
   });

   $.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=0;i<4;i++){
            $('#politics-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
});

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=6;i<10;i++){
            $('#business-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
});

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=0;i<4;i++){
            $('#sports-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
});

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=0;i<4;i++){
            $('#tech-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
});

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=0;i<4;i++){
            $('#entertainment-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
});

$.ajax({
    url:"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=61cf81d70d434551a3a1f6a44f83c5f0",
    success:function (data) {
        for(let i=6;i<10;i++){
            $('#science-news').append(`
             <div class="col-3">
               <div class="card">
                <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.articles[i].title}</h5>
                    <p class="text-info">${data.articles[i].source.name}</p>
                    <a href="${data.articles[i].url}" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                </div>

            </div>

        </div>
        `)
      }
    },
    error:function () {
        alert("Error");
    }
})

})  