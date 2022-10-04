import CreateForm from "./CreateForm";

const CreatePost = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 p-2 rounded-md">a</div>
          <CreateForm />
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
