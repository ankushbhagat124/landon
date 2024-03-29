var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Services",
  KeySchema: [
    // Partition Key
    { AttributeName: "name", KeyType: "HASH" },
    // Sort Keys
    // { AttributeName: "text", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
    // { AttributeName: "href", AttributeType: "S" },
    // { AttributeName: "text", AttributeType: "S" }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});