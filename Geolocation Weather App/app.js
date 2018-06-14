//https://darkskyapp.github.io/skycons/
function weather(){
  var location = document.getElementById("location");
  var apiKey = "969caee98f3e786e03d9c1496f5aba77" ;
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success,error);

  function success(pos){
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;

    location.innerHTML = "Latitude is " + lat + "° Longitude is " + long + "°";

    $.getJSON(url + apiKey + "/" + lat + "," + long + "?callback=?", function (data) {
      $("#temp").html(data.currently.temperature + "° F");
      $("#time").html(data.minutely.summary);

      var skycons = new Skycons();
      skycons.add("icon",data.minutely.icon);
      skycons.play();

    });
  }

  function error(){
    location.innerHTML = "Do you live on planet Earth cause we ain't able to get yo' location";
  }
  location.innerHTML = "Hold Up";

}

weather();
