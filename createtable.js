var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();

AWS.config.region = "us-east-1";

var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'EMP_ID',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'EMP_ID',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'EMPLOYEE',
  StreamSpecification: {
    StreamEnabled: false
  }
};

ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});