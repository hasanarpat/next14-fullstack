"use server";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  const { heading, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      heading,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("Saved to db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Deleted from db");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
