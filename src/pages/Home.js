import MyHeader from "./../components/MyHeader";
import Home_Banner from "./../components/Home_Banner";
import Home_SliderBanner from "../components/Home_SliderBanner";
import MyFooter from "../components/MyFooter";
import Home_Filter_Post from "../components/Home_Filter_Post";
const Home = () => {
  return (
    <div className="Home">
      <MyHeader />
      <Home_Banner />
      <section>
        <Home_SliderBanner />
      </section>
      <section className="Study_Board">
        <h2>함께해요 STUDY</h2>
        <Home_Filter_Post />
      </section>
      <MyFooter />
    </div>
  );
};

export default Home;
