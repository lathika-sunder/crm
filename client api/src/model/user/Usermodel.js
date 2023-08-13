const { UserSchema } = require("./Userschema");

const insertUser = (userObj) => {
  const user = new UserSchema(userObj); // Create an instance of the model
  return user.save(); // Return the Promise directly
};

const getUserByEmail = async email => {
  if (!email) throw new Error('Email is required');

  try {
    const data = await UserSchema.findOne({ email });
    return data;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  insertUser,
  getUserByEmail
};
