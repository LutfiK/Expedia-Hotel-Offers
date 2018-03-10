
var date = require("../Common/Date.js");
var exports = module.exports = {};


exports.buildFilterObject = function (req, filter) {

    var filter = new Object();

    filter.scenario = 'deal-finder';
    filter.page = 'foo';
    filter.uid = 'foo';
    filter.productType = 'Hotel';
    filter.destinationName = req.body.city;
    filter.minTripStartDate = date.formatDate(req.body.minStartDate);
    filter.maxTripStartDate = date.formatDate(req.body.maxStartDate);

    return filter;
};



exports.buildOrffersResponse = function (jsonResponse) {
    var result = new Array();


    var offerInfo = jsonResponse.offerInfo;
    var userInfo = jsonResponse.offerInfo;
    var hotels;

    if (jsonResponse.offers == null || jsonResponse.offers.length == 0) {
        hotels = [];
    }
    else if (jsonResponse.offers.Hotel == null || jsonResponse.offers.Hotel.length == 0) {
        hotels = [];
    }
    else {
        hotels = jsonResponse.offers.Hotel;
    }




    var currency = offerInfo.currency;

    hotels.forEach(function (offerResult) {
        var hotel = new Object();
        hotel.Name = offerResult.hotelInfo.hotelName;
        hotel.Location = offerResult.hotelInfo.hotelDestination;
        hotel.Address = offerResult.hotelInfo.hotelStreetAddress;
        hotel.Latitude = offerResult.hotelInfo.hotelLatitude;
        hotel.Longtitude = offerResult.hotelInfo.hotelLongitude;
        hotel.ImageUrl = offerResult.hotelInfo.hotelImageUrl;

        hotel.Currency = offerResult.hotelPricingInfo.currency;
        hotel.Price = offerResult.hotelPricingInfo.totalPriceValue;



        result.push(hotel);
    }, this);


    return result;


};

