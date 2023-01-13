import connectDB from "../../../middlewares/connectDB";
import Todo from "../../../models/Todo";

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log("je suis ici");
    try {
      const allTasks = await Todo.find();
      console.log("alltasks>>>", allTasks);
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else return res.status(404).json("Route not found");
};

export default connectDB(handler);
