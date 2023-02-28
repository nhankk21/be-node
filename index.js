import express from 'express';
import { initMongodb } from './src/database/mongodb.js';
import { initRouter } from './src/route/router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initMongodb().catch(console.dir);
initRouter(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});

