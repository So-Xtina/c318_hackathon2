$(document).ready(initializeApp);
//525 S Winchester Blvd, San Jose, CA 95128
//7747 U.S. 61, St Francisville, LA 70775
//1126 Queens Hwy, Long Beach, CA 90802
var destinationArray = ['525+S+Winchester+Blvd,+San+Jose,', '7747+Francisville+St,+Louisiana,', '1126+Queens+Highway,+Long+Beach,'];
/*************************************************************************************************************************
 *initializeApp
 * *@params {undefined} none
 * @returns: {undefined} none
 * initializes the application, including adding click handlers and pulling in any data from the server, in later versions
 */
function initializeApp(){
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
    for(var i = 0; i < array.length; i++){
        $.ajax({
            dataType: 'json',
            method: 'post',
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+array[i]+'&key=AIzaSyB8pudXXVYwWP14nlsKLdjfrzGizasWYb4',
            success: function(response){
                student_array = response.data;
                // updateStudentList(student_array);
                console.log('success');
                console.log(response);
                return true;
            }

        })
    }
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

