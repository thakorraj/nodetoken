const request = require("request");

const endpoint = "https://login.microsoftonline.com/patelharshil.onmicrosoft.com/oauth2/token";
// const endpoint = "https://outlook.office.com/api/v2.0";
const requestParams = {
    grant_type: "client_credentials",
    client_id: "cd902cae-3633-4eeb-9ece-98086200be99",
    client_secret: "u5z.9E1Uh1l/@:sYacgJ5B5xInV?CpLK",
  // resource: "https://graph.windows.net"
  resource: "https://outlook.office365.com"
};

request.post({ url:endpoint, form: requestParams }, function (err, response, body) {
    if (err) {
        console.log("error");
    }
    else {
        console.log("Body=" + body);
        let parsedBody = JSON.parse(body);         
        if (parsedBody.error_description) {
            console.log("Error=" + parsedBody.error_description);
        }
        else {
            console.log("Access Token=" + parsedBody.access_token);
        }
    }
});