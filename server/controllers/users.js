import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    //we use Promise.all as we want to send multiple requests to the API
    const friends = await Promise.all(
      user.friends.map((id) => {
        User.findById(id);
      })
    );

    //formatting the friends object and sending only the necessary information as reponse
    const formattedFriends = friends.map(
      ({ _id, firstname, lastname, occupation, picturePath, location }) => {
        return { _id, firstname, lastname, occupation, picturePath, location };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//Update
export const addRemoveFriend = async (req, res) => {
  try {
  } catch (err) {}
};
