import "./App.css";
import { firestore } from "./firebase";

function App() {
  const fun = () => {
    const post = firestore
      .collection("post")
      .get()
      .then((snapshot) => {
        return console.log({ snapshot });
      });

    console.log({ post });
  };

  fun();

  return (
    <div className="App">
      <h1>hello world !!</h1>
    </div>
  );
}

export default App;
