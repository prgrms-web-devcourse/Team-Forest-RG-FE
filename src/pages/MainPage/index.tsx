function MainPage() {
  console.log(process.env);
  console.log(process.env.REACT_APP_SERVER_HOST);
  console.log(process.env.REACT_APP_REDIRECT_URI);
  return (
    <div>
      MainPage
      <span>{process.env.REACT_APP_REDIRECT_URI}</span>
    </div>
  );
}

export default MainPage;
