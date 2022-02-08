import app from "./app";
import { connectDatabase } from "./database";

connectDatabase();

app.listen(process.env.PORT || 3000, () => {
  console.log("app running at http://localhost:3000");
});
