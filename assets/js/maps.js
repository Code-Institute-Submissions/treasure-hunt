function initMap(easyMap) {
  var bermudaLatLng = { lat: 32.313327, lng: -64.747878 };
  var jamaicaLatLng = {lat: 18.1198291, lng: -77.8365849};
  var barbadosLatLng = {lat: 13.1884729, lng: -59.6753414};
  var antiguaLatLng = {lat: 17.0858213, lng: -61.8596279};
  var cubaLatLng = {lat: 21.4653347, lng: -84.0583324};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: 23.464662,
      lng: -67.626422,
    },
  });

  const markerCorrect = new google.maps.Marker({
    position: bermudaLatLng,
    map: map,
    title: "Bermuda",
    label: {
        fontSize: "25pt",
        text: "Bermuda"
    }
})

    var markerIncorrect = new google.maps.Marker({
    position: jamaicaLatLng,
    map: map,
    title: "Jamaica",
    label: {
        fontSize: "25pt",
        text: "Jamaica"
    }
    })

        var markerIncorrect = new google.maps.Marker({
    position: barbadosLatLng,
    map: map,
    title: "Barbados",
    label: {
        fontSize: "25pt",
        text: "Barbados"
    }
    })

        var markerIncorrect = new google.maps.Marker({
    position: antiguaLatLng,
    map: map,
    title: "Antigua",
    label: {
        fontSize: "25pt",
        text: "Antigua"
    }
    })

        var markerIncorrect = new google.maps.Marker({
    position: cubaLatLng,
    map: map,
    title: "Cuba",
    label: {
        fontSize: "25pt",
        text: "Cuba"
    }
    })


  
  markerCorrect.addListener("click", () => {
      $("#map-page").addClass("hide");
       $("#correct-answers").addClass("hide");
        $("#final-page").removeClass("hide");
        $("#yesCaptain").removeClass("hide");
  })

  markerIncorrect.addListener("click", () => {
      $("#map-page").addClass("hide");
       $("#correct-answers").addClass("hide");
        $("#final-page").removeClass("hide");
        $("#noCaptain").removeClass("hide");
  })

}
