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



