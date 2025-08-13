require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');
const logger = require('./config/logger');

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB(); // ✅ Connect to DB before starting server
  app.listen(PORT, () => logger.info(`🚀 Server running on port ${PORT}`));
})();
