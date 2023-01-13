import connectDB from "../../../middlewares/connectDB";
import Todo from "../../../models/Todo";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const todoUpdate = await Todo.updateOne({ _id: req.query.id }, [
        { $set: { isDone: { $eq: [false, "$isDone"] } } },
      ]);

      res.json(todoUpdate);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoDelete = await Todo.deleteOne({ _id: req.query.id });
      res.json(todoDelete);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
};

export default connectDB(handler);
