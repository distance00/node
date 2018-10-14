'use strict';

var http = require('http');
var cert = `-----BEGIN CERTIFICATE-----
MIIB5zCCAY2gAwIBAgIJAPI1efFUKZP1MAoGCCqGSM49BAMCMGAxCzAJBgNVBAYT
AkNOMQwwCgYDVQQIDANkZCAxDDAKBgNVBAcMA2NjIDETMBEGA1UECgwKX0NhX3Jv
b3RfIDEMMAoGA1UECwwDYmQgMRIwEAYDVQQDDAlfQ2Ffcm9vdF8wHhcNMTcxMjEw
MTU1NDEzWhcNNDUwNDI2MTU1NDEzWjBgMQswCQYDVQQGEwJDTjEMMAoGA1UECAwD
ZGQgMQwwCgYDVQQHDANjYyAxEzARBgNVBAoMCl9DYV9yb290XyAxDDAKBgNVBAsM
A2JkIDESMBAGA1UEAwwJX0NhX3Jvb3RfMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcD
QgAEAzOXnsQnIFH4BJUaz9JPG10g72wzgksUl94Fitu58v7QZnVArXA3UcmWpZcN
T/vWtaDgzp7eHKwWkP62bzEJq6MwMC4wEQYJYIZIAYb4QgEBBAQDAgZAMAwGA1Ud
EwQFMAMBAf8wCwYDVR0PBAQDAgIEMAoGCCqGSM49BAMCA0gAMEUCIEj7lmY447Ne
YErlo/x2cFL/Z4c5yEYJh35IaqtHON24AiEA6WN2X6M5eW2L++ucYekWY5DHz2mc
GqQh2l81vwFI7t0=
-----END CERTIFICATE-----`;

var server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader('Content-Type', 'application/x-x509-ca-cert');
	response.end(cert);
});

var serverPort = process.env.PORT || 5000;

server.listen(serverPort);

console.log(`[Rocka Node Server] Running at http://127.0.0.1:${serverPort}/`);
