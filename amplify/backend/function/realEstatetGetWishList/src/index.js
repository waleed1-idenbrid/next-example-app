const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB();

exports.handler = async (event) => {
  try {
    const propertiesId = event.arguments.propertiesId; // Get the propertiesId from the event
    console.log(propertiesId);
    // Define the DynamoDB parameters
    // const params = {
    //   TableName: process.env.PropertyTable, // Replace with your table name
    // };
    const params = {
      TableName: "Property-jhjaugzrwjggtb7f72pxnoqrom-dev"
      , // Replace with your table name
    };

    // Query DynamoDB to get the property
    const result = await ddb.scan(params).promise();
    console.table(result.Items)

    if (result.Items && result.Items.length > 0) {
      // The property was found
      const response = []
      for (const item of result.Items) {
        const extractedItem = {};
        for (const [key, valueObj] of Object.entries(item)) {
          extractedItem[key] = valueObj.S; // Extract the value from the "S" child object
        }
        console.log(extractedItem,"extracted property")
        response.push(extractedItem);
      }
      return response;
    } else {
      // Property not found
      
      throw new Error("Property not found")
    }
  } catch (error) {
    console.error('Error', error);
    // return {
    //   statusCode: 500,
    //   body: JSON.stringify({ message: "Internal Server Error" }),
    // };
    throw new Error("Internal Server Error")
  }
};
