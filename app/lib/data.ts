import { Document, model, Schema } from "mongoose";
import { connectToDB } from "./utils";
interface UserDocument extends Document {
  username: string;
  // Add other fields as needed
}

const User = model<UserDocument>("User", new Schema<UserDocument>({
  username: String,
  // other fields
}));

interface FetchUsersResult {
  count: number;
  users: UserDocument[];
}

export const fetchUsers = async (q: string, page: number): Promise<FetchUsersResult> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
      
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};


export type CardItem = {
  id: number,
  title: string,
  number: number,
  change: number
}
export const cardData:CardItem[] = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
