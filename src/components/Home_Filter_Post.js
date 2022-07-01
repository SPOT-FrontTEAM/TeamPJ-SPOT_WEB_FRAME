import { useContext, useState } from "react";

import { recruitStudyData } from "../util/recruitStudyData";

const MyPost_Item_List = () => {
  return (
    <div className="Post_Item">
      <div className="Item_img_Wrapper">
        <img src={process.env.PUBLIC_URL + `/imgData/Slider1.jpg`}></img>
      </div>
      <div className="Item_info_Wrapper"></div>
    </div>
  );
};

const Home_Filter_Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  const Home_Filter_Toggle_Text = ({ toggle }) => {
    if (toggle === true) {
      return <h3>구직</h3>;
    } else {
      return <h3>구인</h3>;
    }
  };
  return (
    <div className="Home_Filter_Toggle_Wrapper">
      <div className="Toggle_Btn" onClick={clickedToggle} toggle={toggle}>
        <div
          className={toggle ? `Circle_off` : `Circle_on`}
          toggle={toggle}
        ></div>
      </div>
      <div className="Toggle_Text">
        <Home_Filter_Toggle_Text toggle={toggle} />
      </div>
    </div>
  );
};

const Home_Filter_Option = ({ headText ,data }) => {
  return (
    <div className="Home_Filter_Option">
      <label className="Title">{headText}</label>
      <input className="Option"></input>
    </div>
  );
};


const Home_Filter_Post = () => {
  return (
    <div className="Home_Filter_Post">
      <div className="Home_Filter">
        <div className="Home_Filter_Toggle">
          <Home_Filter_Toggle />
        </div>
        <div className="Home_Filter_University">
          <Home_Filter_Option headText="학교" />
        </div>
        <div className="Home_Filter_Branch">
          <Home_Filter_Option headText="분야" />
        </div>
        <div className="Home_Filter_Details">
          <Home_Filter_Option headText="세부분야" />
        </div>
      </div>
      <div className="Home_Post">
        <MyPost_Item_List />
      </div>
    </div>
  );
};

export default Home_Filter_Post;
