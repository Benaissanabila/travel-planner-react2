const asyncHandler = require("express-async-handler");
const {graphQLQuery} = require("../helpers/graphQLQuery");
exports.trip_detail = asyncHandler(async (req, res, next) => {

    const response =  await graphQLQuery(
        `query GetUserTrip($id: ID!) {
            getUserTrip(id: $id) {
                date
    description
    id
    image
    location
    name
    prix
            }
        }`,{
            id: req.params.id,
        });


    if (response.data.errors) {
        console.log(response.data.errors);

        return res.json({
            errors: response.data.errors
        })
    }
    console.log(response.data.data)
    res.json({
        data: response.data.data.getUserTrip,
        body: req.body
    });
});


// Handle book create on POST.
exports.trip_create = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    // check if book exists
    // validate data
    // add to database
    res.json({
        body: req.body
    });
});
exports.trip_list = asyncHandler(async (req, res, next) => {
    res.json({});
})

exports.trip_update = asyncHandler(async (req, res, next) => {
    res.json({});
})

exports.trip_delete = asyncHandler(async (req, res, next) => {
    res.json({});
})
