exports.read = async (req, res) => {
  res.send("Heelo Controller Read");
};

exports.list = async (req, res) => {
  try {
    res.send("Hello list");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.create = async (req, res) => {
  try {
    res.send("Hello Create");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.update = async (req, res) => {
  try {
    res.send("Hello update");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
exports.remove = async (req, res) => {
  try {
    res.send("Hello Delete");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
