const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome Anushka",
      success: true,
    });
  };
  
  module.exports = { testController };
  