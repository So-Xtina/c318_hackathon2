$(document).ready(initializeApp);
    $(function() {
        $('#enter').hover(function () {
            $('.landing-page-body').addClass('blur')
        }, function () {
            $('.landing-page-body').removeClass('blur')
        });
    });

    $(function() {
        $('#about-link').hover(function () {
            $('.about').addClass('blur')
        }, function () {
            $('.about').removeClass('blur')
        });
    });

    $(function() {
        console.log('test')
    });





//525 S Winchester Blvd, San Jose, CA 95128
//7747 U.S. 61, St Francisville, LA 70775
//1126 Queens Hwy, Long Beach, CA 90802
var latitudeLongitudeLocations = [
    {   name: 'Queen Mary',
        coordinates: {lat:33.7531, lng: -118.1898},
        wikiReference: 166115

    },
    {   name: 'Lalaurie Mansion',
        coordinates: {lat:29.951065, lng:-90.071533},
        wikiReference: 2336222

    },
    {   name: 'Winchester House',
        coordinates: {lat:37.318331800, lng:-121.951049100},
        wikiReference: 268137
    },
    {   name: 'Trans Allegheny Asylum',
        coordinates: {lat:39.3166654, lng:-82.0999996},
        wikiReference: 9642517

    },
    {   name: 'Ohio State Reformatory',
        coordinates: {lat:41.1058079101, lng:-80.5732243738},
        wikiReference: 2968986

    },
    {   name: 'Myrtles Plantation',
        coordinates: {lat:33.689060, lng:-78.886696},
        wikiReference: 2557599

    },
    {   name: 'St. Augustine Lighthouse',
        coordinates: {lat:29.901243, lng:-81.312431},
        wikiReference: 4007948

    },
    {   name: 'Lizzie Borden House',
        coordinates: {lat:45.253783, lng:-69.445474},
        wikiReference: 45577594

    },
    {   name:'Denver & Rio Grande Railroad',
        coordinates: {lat:34.0008993, lng:-106.818634},
        wikiReference: 48550

    },
    {   name: 'Eastern State Penitentiary',
        coordinates: {lat:39.96839, lng:-75.172652},
        wikiReference: 443724

    }

];
/*************************************************************************************************************************
 *initializeApp
 * *@params {undefined} none
 * @returns: {undefined} none
 * initializes the application, including adding click handlers and pulling in any data from the server, in later versions
 */
function initializeApp(){
    initMap();
    // googleMapsLocations(destinationArray);
    addClickHandlersToElements();

}


/*************************************************************************************************************************
 * addClickHandlersToElements
 * @params {undefined}
 * @returns  {undefined}
 */

function addClickHandlersToElements() {
    $('.hauntedSpots').on('click', function() {
        var photo_id = $(this).attr('data-photo-id');
        var video_id = $(this).attr('data-video-id');
        var wikiReference = $(this).attr('data-wiki-info');
        var wikiID = $(this).attr('data-wiki-id');
        wikiCall(wikiReference, wikiID);
        getFlickrImageUrl(photo_id);
        displayVideo(video_id);
        $('#infoModal, .shadowBox').toggle();
        console.log("This is the video_id in the clickHandler",video_id);
    });

    $('.close').on('click', function(){
        $('#infoModal, .shadowBox').toggle();
        $('.hauntedPic').empty();
        $('#info').empty();
        $('#youtubeDiv').empty();
        var newDiv = $("<div>").attr('id', 'item');
        $('#youtubeDiv').append(newDiv);
        $('.active').removeClass('active');
        $('#first').addClass('active');
    });
}

/*************************************************************************************************************************
 * addDestination
 * @params {undefined}
 * @returns  {undefined}
 */

function addDestination() {
    var destinationObject = {};

}

/*************************************************************************************************************************
 * renderMapToDom
 * @params {object}
 * @calls Google Maps API call
 * @returns  {undefined}
 */

function renderMapToDom(destinationObject) {

}

/*************************************************************************************************************************
 * carousalModal
 * @params {destinationObject}
 * @calls renderPicturesToModal,
 * @returns  {undefined}
 */

function carousalModal(destinationObject) {
    
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
        // debugger;
        var unitedStatesCenterPoint = {lat: 37.090240, lng: -95.712891};
        var map = new google.maps.Map(document.getElementById('theMap'), {
            zoom: 3.9,
            center: unitedStatesCenterPoint
        });
        for (var i = 0; i < latitudeLongitudeLocations.length; i++) {
            var marker = new google.maps.Marker({
                position: latitudeLongitudeLocations[i].coordinates,
                map: map
            });
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
    function displayVideo(videoID) {
        console.log("This is the video id in the function ", videoID);

            player= new YT.Player('item', {
                height: '390',
                width: '640',
                videoId: videoID, // needs to be a function looping through the object and pulling the videoId value and placing the correct one here for the call
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

/********************************************************************
 * Flickr AJAX Call
 */

function getFlickrImageUrl(photo_id) {
    var ajaxConfig = {
        dataType: 'JSON',
        data: {
            api_key: 'f1e9ba45e6591bdf15e5a296d5ebaaa6',
            secret: '3eec67f85681e79a',
            method: 'flickr.photos.getSizes',
            format: 'json',
            nojsoncallback: '1',
            photo_id: photo_id
        },
        method: 'GET',
        url: 'https://api.flickr.com/services/rest?',
        success: function (data) {
            console.log("This is the data we're getting back from the getFlickerImageUrl", data);
            var hauntedHouseImg = null;
            if (data.sizes.size.length < 8) {
                hauntedHouseImg = $('<img>').attr('src', data.sizes.size[data.sizes.size.length - 1].source)
            } else {
                hauntedHouseImg = $('<img>').attr('src', data.sizes.size[7].source);
            }
            $(".hauntedPic").append(hauntedHouseImg);
        }
    }
    $.ajax(ajaxConfig);
}


function wikiCall(wikiReference, wikiID) {
    $.ajax({
        type: "get",
        url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+wikiReference,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);

            var text = result.query.pages[wikiID]["extract"];
            var pageInfo = $("<p>", {
                text: text,
                css: {
                    fontSize: '16px'
                }

            });
            $("#info").append(pageInfo);
        }

    });
}