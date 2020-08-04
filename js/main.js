function fetch(){
    var txt=document.getElementById('txt').value;
    $.get("https://api.weatherapi.com/v1/current.json?key=428d218726b643ccb9b133731202907&q="+txt,
          function (data){
                console.log(data);
                var abc=document.getElementById('cdegree');
                abc.innerHTML=data['current']['temp_c']+"°C";
                var abc=document.getElementById('fdegree');
                abc.innerHTML=data['current']['temp_f']+"°F";
                var abc=document.getElementById('temp-desc');
                abc.innerHTML=data['current']['condition']['text'];
                var abc=document.getElementById('location');
                abc.innerHTML=data['location']['name'];
                }
         )
}


