

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
//AWS.config.loadFromPath('./config.json');
AWS.config.region = "us-east-1";

// Create the IAM service object
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});


var params = {
  Code: { 
    S3Bucket: 'bucketput007',
    S3Key: 'index.zip'
  },
  FunctionName: 'insertdata', 
  Handler: 'index.handler', 
  Role: 'arn:aws:iam::503677342787:role/lambda_role', 
  Runtime: 'nodejs12.x', 
  Description: 'delete Items in table',
};
lambda.createFunction(params, function(err, data) {
  if (err) console.log(err); 
  else     console.log(data);        
});