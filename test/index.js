var test = require('tape');
var around = require('tape-around')
var request = require('supertest');
var app = require('../server');
var apiProvider = require('../modules/Common/ApiProvider.js');
var sinon = require('sinon');

//stubbed api call result
var offersResponse = {
    "offerInfo": {
        "siteID": "1",
        "language": "en_US",
        "currency": "USD",
        "userSelectedCurrency": "USD"
    },
    "userInfo": {
        "persona": {
            "personaType": "OTHERS"
        },
        "userId": "foo"
    },
    "offers": {
        "Hotel": [
            {
                "offerDateRange": {
                    "travelStartDate": [
                        2018,
                        3,
                        18
                    ],
                    "travelEndDate": [
                        2018,
                        3,
                        20
                    ],
                    "lengthOfStay": 2
                },
                "destination": {
                    "regionID": "178293",
                    "associatedMultiCityRegionId": "178293",
                    "longName": "New York (and vicinity), New York, United States of America",
                    "shortName": "New York",
                    "country": "United States of America",
                    "province": "New York",
                    "city": "New York",
                    "tla": "NYC",
                    "nonLocalizedCity": "NewYork"
                },
                "hotelInfo": {
                    "hotelId": "25906",
                    "hotelName": "Salisbury Hotel",
                    "localizedHotelName": "Salisbury Hotel",
                    "hotelDestination": "New York",
                    "hotelDestinationRegionID": "2621",
                    "hotelLongDestination": "New York,NY,USA",
                    "hotelStreetAddress": "123 W57th St",
                    "hotelCity": "New York",
                    "hotelProvince": "NY",
                    "hotelCountryCode": "USA",
                    "hotelLatitude": 40.764841,
                    "hotelLongitude": -73.978404,
                    "hotelStarRating": "3.0",
                    "hotelGuestReviewRating": 4.1,
                    "hotelReviewTotal": 16474,
                    "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/30000/26000/25906/4be9c969_t.jpg",
                    "vipAccess": true,
                    "isOfficialRating": false
                },
                "hotelPricingInfo": {
                    "averagePriceValue": 118.4,
                    "totalPriceValue": 236.8,
                    "crossOutPriceValue": 240.4,
                    "originalPricePerNight": 240.4,
                    "currency": "USD",
                    "percentSavings": 50.75,
                    "drr": false
                },
                "hotelUrls": {
                    "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F25906%2F2018-03-18%2F2018-03-20",
                    "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-03-18%2F2018-03-20%3FSearchType%3DDestination%26CityName%3DNew+York%26RegionId%3D178293%26Selected%3D25906"
                }
            }
        ]
    }
};

//expected response
var expectedOfferSearchPostResponse = [
    {
        Name: 'Salisbury Hotel',
        Location: 'New York',
        Address: '123 W57th St',
        Latitude: 40.764841,
        Longtitude: -73.978404,
        ImageUrl: 'https://images.trvl-media.com/hotels/1000000/30000/26000/25906/4be9c969_t.jpg',
        Currency: 'USD',
        Price: 236.8
    }
];

test('inital GET', function (t) {
    request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.same(res.text, 'Welocome to Hotel Offers API !', 'Correct Welcome msg');
            t.end();
        });
});




// define before and after hooks to stub the api network call encapsulated in apiProvider module 
testBlock = around(test)
    .before(function (t) {
        sinon
            .stub(apiProvider, "getJSON")
            .yields(undefined, offersResponse);
        t.end();
    })
    .after(function (t) {
        apiProvider.getJSON.restore();
        t.end();
    });


testBlock('search offers', function (t) {
    request(app)
        .post('/offers/search')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
             var actual = res.body;
            var expected = expectedOfferSearchPostResponse;
            t.error(err, 'No error');
            t.same(actual, expected, 'Actual Search Offers for Post Reuests match expected value');
            t.end();
        });
});

