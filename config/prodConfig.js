module.exports.prodConfig = {
    authPort: process.env.PROD_PORT,
    dbUrl: `mongodb+srv://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@${process.env.DEV_DB_URL}/test?retryWrites=true&w=majority`
  };
  