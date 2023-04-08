const UserModal = require("../modal/user");

const addUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(404).send({
      status: "warning",
      message: `Name or email is missing`,
    });
  }

  try {
    const user = new UserModal({ ...req.body });
    await user.save();
    res
      .status(200)
      .send({ status: "success", message: "signup successful", data: user });
  } catch (er) {
    res.status(401).send({ status: "error", message: er.message });
  }
};

module.exports = {
  addUser,
};
