module.exports.devConfig = {
    authPort: process.env.DEV_PORT,
    dbUrl: `mongodb+srv://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@${process.env.DEV_DB_URL}/test?retryWrites=true&w=majority`
  };
