var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        username: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        email_verified: { S: event.request.userAttributes.email_verified },
        phone_number: { S: event.request.userAttributes.phone_number },
        role: { S: event.request.userAttributes['custom:role'] },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE,
    };

    try {
      await ddb.putItem(params).promise();
      console.log('Success');
    } catch (err) {
      console.log('Error', err);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
