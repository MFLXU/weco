import CreateForm from "./CreateForm";

const CreatePost = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 p-4 rounded-md text-xl border border-orange-500">
            <p>use the github repository title</p>
            <p>make sure that your github repository is public</p>
            <p>post the exact link of the github repository</p>
            <p>
              for the description write a small overview of the project and the
              main goal, and whats left to be done.
            </p>
            <p className="mt-8">enjoy.</p>
          </div>
          <CreateForm />
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
