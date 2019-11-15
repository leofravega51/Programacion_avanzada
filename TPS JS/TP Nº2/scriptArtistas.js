// var url = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=ddcd0818ab6e20d102ecb1e1df15af31&format=json";
// var xmlHttp = new XMLHttpRequest();

// xmlHttp.onreadystatechange = function(){
//     if(xmlHttp.readyState===4)
//         if(xmlHttp.status===200) 
//         {
//             console.info(JSON.parse(xmlHttp.responseText));     //Muestra en consola todo el objeto extraido del JSON
//             var obj = JSON.parse(xmlHttp.response).artists;

//             var table="<table border= 1px>";
//             table+= "<caption>Top 10 Artistas Destacados</caption>"
//             table+="<tr><td>Nombre</td><td>Play Count</td><td>Listeners</td></tr>"; 
            
//             for(i = 0; i<= 10; i++){
//                 table+="<tr><td>"+obj.artist[i].name+"</td><td>"+obj.artist[i].playcount+"</td><td>"+obj.artist[i].listeners+"</td></tr>";
//             }
            
//             table+="</table>";

//             document.getElementById("prueba").innerHTML = table;

//         }else if(xmlHttp.status===404)
//             {
//                 console.error("ERROR! 404");
//                 console.info(JSON.parse(xmlHttp.responseText));     //Muestra en consola todo el objeto extraido del JSON
//             }
// };
    
// xmlHttp.open("GET", url,true);
// xmlHttp.send();


const axios = require('axios');

let getArtists = async () => {

    const apikey = 'ddcd0818ab6e20d102ecb1e1df15af31'
    const audioscrobblerApi = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=${apikey}&format=json`
    const response = await axios.get(audioscrobblerApi)
    const artists = response.data.topartists.artist

    artists.forEach(artist => {
        console.log(artist.name);
    });
}

getArtists()
    .then(res => console.log(`${res}`))   
    .catch(err => console.log(`Error: ${err}`))

