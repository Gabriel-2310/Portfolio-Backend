import app from "./src/App";

const port = process.env.PORT || 5000

app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });