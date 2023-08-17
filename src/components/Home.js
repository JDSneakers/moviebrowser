import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              veniam sapiente ut unde. Iure quae, voluptatibus asperiores, quasi
              sed placeat omnis blanditiis ipsam neque natus culpa ducimus nisi
              assumenda quidem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
