const About = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div className="p-4 bg-red-600 rounded-md">
            <h1 className="text-4xl font-extrabold">
              Why some features don't work?
            </h1>
            <p className="text-xl">
              while using the weco app you may come across some bugs or not
              working features which are mostly related to firebase and the
              firestore database and that's due to me only using the free plan,
              this is only a small project and am not willing to invest money on
              it. so features like posting and browsing projects may not work,
              but i added some dummy post so visitors can still browse projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
