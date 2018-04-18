$(document).ready(initializeApp);
//525 S Winchester Blvd, San Jose, CA 95128
//7747 U.S. 61, St Francisville, LA 70775
//1126 Queens Hwy, Long Beach, CA 90802
var destinationArray = ['525+S+Winchester+Blvd,+San+Jose,', '7747+Francisville+St,+Louisiana,', '1126+Queens+Highway,+Long+Beach,'];
var latitudeLongitudeLocations = [
    {   name: 'Queen Mary',
        coordinates: {lat:33.7531, lng: -118.1898}
    },
    {   name: 'Lalaurie Mansion',
        coordinates: {lat:29.951065, lng:-90.071533}
    },
    {   name: 'Winchester House',
        coordinates: {lat:37.318331800, lng:-121.951049100}
    },
    {   name: 'Trans Allegheny Asylum',
        coordinates: {lat:39.3166654, lng:-82.0999996}
    },
    {   name: 'Ohio State Reformatory',
        coordinates: {lat:41.1058079101, lng:-80.5732243738}
    },
    {   name: 'Myrtles Plantation',
        coordinates: {lat:33.689060, lng:-78.886696}
    },
    {   name: 'St. Augustine Lighthouse',
        coordinates: {lat:29.901243, lng:-81.312431}
    },
    {   name: 'Lizzie Borden House',
        coordinates: {lat:45.253783, lng:-69.445474}
    },
    {   name:'Denver & Rio Grande Railroad',
        coordinates: {lat:34.0008993, lng:-106.818634}
    },
    {   name: 'Eastern State Penitentiary',
        coordinates: {lat:39.96839, lng:-75.172652}
    }

];
/*************************************************************************************************************************
 *initializeApp
 * *@params {undefined} none
 * @returns: {undefined} none
 * initializes the application, including adding click handlers and pulling in any data from the server, in later versions
 */
function initializeApp(){
    initMap(latitudeLongitudeLocations);
    googleMapsLocations(destinationArray);
}


/*************************************************************************************************************************
 * addClickHandlersToElements
 * @params {undefined}
 * @returns  {undefined}
 */

function addClickHandlersToElements(){


}

/*************************************************************************************************************************
 * addDestination
 * @params {undefined}
 * @returns  {undefined}
 */

function addDestination(){
    var destinationObject = {};

}

/*************************************************************************************************************************
 * renderMapToDom
 * @params {object}
 * @calls Google Maps API call
 * @returns  {undefined}
 */

function renderMapToDom(destinationObject){

}

/*************************************************************************************************************************
 * carousalModal
 * @params {destinationObject}
 * @calls renderPicturesToModal,
 * @returns  {undefined}
 */

function carousalModal(destinationObject){

}

function googleMapsLocations(array){
    var latLongObject = {};
    for(var i = 0; i < array.length; i++){
        $.ajax({
            dataType: 'json',
            method: 'post',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+array[i]+'&key=AIzaSyB8pudXXVYwWP14nlsKLdjfrzGizasWYb4',
            success: function(response){

                console.log('success');
                console.log(response);
                return true;
            }

        })
    }
}
function initMap() {
    var unitedStatesCenterPoint = {lat: 37.090240, lng: -95.712891};
    var map = new google.maps.Map(document.getElementsByClassName('theMap'), {
        zoom: 3.9,
        center: unitedStatesCenterPoint
    });
    for(var i = 0; i < latitudeLongitudeLocations.length; i++){
            var marker = new google.maps.Marker({
            position: latitudeLongitudeLocations[i].coordinates,
            map: map
        });
    }

/*************************************************
 * YouTube AJAX Call:
 */
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player= new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'Y5bW1frdYOY',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

