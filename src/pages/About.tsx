const About = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div className="p-4 bg-red-600 mb-4 rounded-md border border-white border-2">
            <h1 className="md:text-4xl text-3xl mb-4 font-extrabold">
              Why some features don't work?
            </h1>
            <p className="md:text-xl">
              while using the weco app you may come across some bugs or not
              working features which are mostly related to firebase and the
              firestore database and that's due to me only using the free plan,
              this is only a small project and am not willing to invest money on
              it. so features like posting and browsing projects may not work,
              but i added some dummy post so visitors can still browse projects.
            </p>
          </div>
          <h2 className="md:text-4xl text-3xl mb-4 text-orange-500 font-extrabold mb-4">
            About WECO :
          </h2>
          <p className="md:text-xl">
            <span className="font-bold">WECO</span> web app (we collaborate) is
            an open-source platform where developers can post their open-source
            projects and have other developers to contribute to it ot the other
            way around. built using ReactJS with Typescript for the front-end
            and styled fully using TailwindCSS, Back-end build using Firebase
            Authentication and Firestore database.
          </p>
          <p className="text-xl mb-10 mt-40 text-center">
            give us a star on{" "}
            <a
              className="bg-neutral-800 py-2 px-4 rounded-md hover:bg-neutral-700 duration-300 font-extrabold"
              href="https://github.com/MFLXU/weco"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
