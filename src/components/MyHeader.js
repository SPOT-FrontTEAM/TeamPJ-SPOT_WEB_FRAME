const MyHeader = () => {
  return (
    <header>
      <div className={"test_header"}>
        <img src={process.env.PUBLIC_URL + `/sample/sample_nav.jpeg`} />
      </div>
    </header>
  );
};

export default MyHeader;
