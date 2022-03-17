const setUser = (req, res) => {
  res.status(200).json({ message: "post user" });
};

module.exports = {
  setUser,
};
