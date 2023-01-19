var bodyParser = require("body-parser");
let data = [{ item: "get milk" }, { item: "get book" }, { item: "read book" }];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.set("content-type", "application/json");
    console.log(req.body);
    res.json(data);
  });

  app.get("/todo", urlencodedParser, (req, res) => {
    res.render("todo", { todo: data });
  });

  app.delete("/todo/:item", (req, res) => {
    data = data.filter((td) => {
      return td.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
