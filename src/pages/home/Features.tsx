const Features = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className=" hover:-translate-y-2 flex gap-2 items-center justify-center hover:border-orange-500 border border-neutral-900 text-2xl font-bold py-8 px-8 rounded-md bg-neutral-800 duration-300">
            <p>brows open-source projects</p>
          </div>
          <div className=" hover:-translate-y-2 flex gap-2 items-center justify-center hover:border-orange-500 border border-neutral-900 text-2xl font-bold py-8 px-8 rounded-md bg-neutral-800 duration-300">
            <p>post Your open-source projects</p>
          </div>
          <div className=" hover:-translate-y-2 flex gap-2 items-center justify-center hover:border-orange-500 border border-neutral-900 text-2xl font-bold py-8 px-8 rounded-md bg-neutral-800 duration-300">
            <p>contribute to open-source projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
