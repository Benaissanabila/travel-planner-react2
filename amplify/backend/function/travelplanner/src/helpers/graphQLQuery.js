
const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://7ukvkzoxarfcxikqs5ndlnv3bu.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-hgi5sagt6nahtmixioevm2whle',
        },
        data: {
            query, variables
        },
    });

