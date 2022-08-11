const app = require('./src/App');
const router  = app.default;

const port = process.env.PORT || 5000;

router.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });