import app from './app';
import * as dontenv from 'dotenv';

// Dotenv Config
dontenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.clear();
  console.log(
    `⚡ Server is running on port ${PORT} (Default URL: http://localhost:${PORT}/).`,
  );
});
