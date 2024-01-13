import { addPost, deletePost } from "@/lib/action";

const page = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="heading" name="heading" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="img" name="img" />
        <button>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="Id for post" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default page;
