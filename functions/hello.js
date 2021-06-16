// functions/hello.js
exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World!";
  return {
    status: 200,
    body: `Hello ${subject}`,
  };
};
