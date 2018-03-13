const express = require("express");
var urlPathBuilder = require("../modules/Common/urlPathBuilder.js");
var offersBL = require("../modules/BusinessLogic/OffersBL.js");
var apiProvider = require("../modules/Common/ApiProvider.js");


const router = express.Router();
const baseBath = '/offers/v2/getOffers?';
const url = 'offersvc.expedia.com';


//search offers
router.post('/search', (req, response, next) => {

  var returnedOffers = '';
  var filter = offersBL.buildFilterObject(req);
  path = urlPathBuilder.generatePath(baseBath, filter);

  apiProvider.getJSON(url, path, function (err, result) {
   
    if (err) {
      var errMsg = 'Error while trying to get offers: ' + err;
      console.log(errMsg);
      return;
    }
    returnedOffers = offersBL.buildOrffersResponse(result);
    response.json(returnedOffers);

  });


});

module.exports = router;
