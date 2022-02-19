import logo from "./logo.png";
import "./App.css";

function Label(props) {
  return (
    <>
      <input type="checkbox" />
      <label>{props.name}</label>
      <br />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>THINGS TO DO</h1>
      <p>During bootcamp in sanbercode</p>
      <form action="">
        <Label name="Belajar GIT & CLI" />
        <Label name="Belajar HTMl & CSS" />
        <Label name="Belajar Javascript" />
        <Label name="Belajar ReactJS Dasar" />
        <Label name="Belajar ReacrJS Advance" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
