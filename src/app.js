exports.lambdaHandler = async (event) => {
    console.log("Stage:", process.env.STAGE);
    return {
        statusCode: 200,
        body: JSON.stringify({
             message: `Hello from ${process.env.STAGE} environment! Updated at ${new Date().toISOString()}`,
        }),
    };
};
