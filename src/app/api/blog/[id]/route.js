import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log("id======", id);
  try {
    connectToDb();

    const post = await Post.findOne({ id });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  console.log("id======", id);
  try {
    connectToDb();

    await Post.deleteOne({ id });
    return NextResponse.json("Post succesfully deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
// export const PUT = async (request, { params }) => {
//   const { id } = params;
//   console.log("id======", id);
//   try {
//     connectToDb();

//     const post = await Post.findOne({ id });
//     return NextResponse.json(post);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch post!");
//   }
// };
