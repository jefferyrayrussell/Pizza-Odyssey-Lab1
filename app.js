console.log('javascript works');

/*
PIZZA-ODYSSEY Day 1 Lab for March 22
Build Pizza Shop with Object Literals and Report Out the Data for Each Store.
*/

/* This function is used to calculate a randome number between a min and a max.
It is used to determine the number of pizzasSold and the number of deliveriesMade
for a given hour at a given store location. */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* The function addHourlySalesDataToLocation has the parameters: storelocation, time,
pizzasSold,deliveriesMade. It adds store data to a locations hourly array. */

function addHourlySalesDataToLocation(storeLocation, time, pizzasSold, deliveriesMade){
  storeLocation.hourlyData.push({
    time: time,
    pizzasSold: pizzasSold,
    deliveriesMade: deliveriesMade,
    driversNeeded: Math.ceil(deliveriesMade / 3),
  });
}

/*The function displayHourlyDataList places a list places a list on the web page
at the html id "ballard".  */

function displayHourlyDataList(storeLocation){
  var listContainer = document.getElementById('list-container');
  var listHeading = document.createElement('h3');
  listHeading.textContent = locationName;
  listContainer.appendChild(listHeading);
  var storeLocationUndefinedList = document.getElementById('list-container');
  if (storeLocationUndefinedList){
    var workDayHour;
    for (var i = 0; i < storeLocation.hourlyData.length; i++ ){
      workDayHour = document.createElement('li');
      workDayHour.textContent = storeLocation.hourlyData[i].time + ' pizzas sold: ' + storeLocation.hourlyData[i].pizzasSold + ', deliveries made: ' + storeLocation.hourlyData[i].deliveriesMade + ', drivers recommended: ' + storeLocation.hourlyData[i].deliveriesMade + '.';
      listHeading.appendChild(workDayHour);
    }
  }
}

/* This object literal function creates the single object named 'ballard' with
the property name and a property called hourlySalesData. The content of the object
is stored in the variable named ballard.*/

var ballard = {
  name: 'ballard',
  hourlyData: []
};

/* The arguments to call the function addHourlySalesDataToLocation are provided
here. */

addHourlySalesDataToLocation(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ballard, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ballard, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ballard, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ballard, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ballard, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ballard, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ballard, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ballard, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ballard, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(ballard, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(ballard, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('Ballard Pizza3001');
displayHourlyDataList(ballard);

var firstHill = {
  name: 'firstHill',
  hourlyData: []
};

addHourlySalesDataToLocation(firstHill, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(firstHill, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(firstHill, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(firstHill, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(firstHill, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(firstHill, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(firstHill, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(firstHill, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(firstHill, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(firstHill, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(firstHill, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(firstHill, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(firstHill, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('First Hill Pizza3001');
displayHourlyDataList(firstHill);

var internationalDistrict = {
  name: 'internationalDistrict',
  hourlyData: []
};

addHourlySalesDataToLocation(internationalDistrict, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(internationalDistrict, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(internationalDistrict, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(internationalDistrict, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(internationalDistrict, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(internationalDistrict, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(internationalDistrict, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(internationalDistrict, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(internationalDistrict, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(internationalDistrict, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(internationalDistrict, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(internationalDistrict, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(internationalDistrict, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('The International District Pizza3001');
displayHourlyDataList(internationalDistrict);

var southLakeUnion = {
  name: 'southLakeUnion',
  hourlyData: []
};

addHourlySalesDataToLocation(southLakeUnion, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(southLakeUnion, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(southLakeUnion, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(southLakeUnion, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(southLakeUnion, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(southLakeUnion, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(southLakeUnion, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(southLakeUnion, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(southLakeUnion, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(southLakeUnion, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(southLakeUnion, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(southLakeUnion, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(southLakeUnion, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('South Lake Union Pizza3001');
displayHourlyDataList(southLakeUnion);

var georgetown = {
  name: 'georgetown',
  hourlyData: []
};

addHourlySalesDataToLocation(georgetown, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(georgetown, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(georgetown, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(georgetown, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(georgetown, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(georgetown, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(georgetown, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(georgetown, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(georgetown, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(georgetown, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(georgetown, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(georgetown, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(georgetown, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('Georgetown Pizza3001');
displayHourlyDataList(georgetown);

var ravenna = {
  name: 'ravenna',
  hourlyData: []
};

addHourlySalesDataToLocation(ravenna, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '11:00am', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '12:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '1:00pm', getRandomIntInclusive(0,7), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ravenna, '2:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ravenna, '3:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ravenna, '4:00pm', getRandomIntInclusive(2,15), getRandomIntInclusive(1,4));
addHourlySalesDataToLocation(ravenna, '5:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ravenna, '6:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ravenna, '7:00pm', getRandomIntInclusive(15,35), getRandomIntInclusive(3,8));
addHourlySalesDataToLocation(ravenna, '8:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ravenna, '9:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ravenna, '10:00pm', getRandomIntInclusive(12,31), getRandomIntInclusive(5,12));
addHourlySalesDataToLocation(ravenna, '11:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(ravenna, '12:00am', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));
addHourlySalesDataToLocation(ravenna, '1:00pm', getRandomIntInclusive(5,20), getRandomIntInclusive(6,11));

locationName = ('Ravenna Pizza3001');
displayHourlyDataList(ravenna);
