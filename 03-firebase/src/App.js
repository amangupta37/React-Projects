import { useEffect, useState } from "react";
import "./App.css";
import { firestore } from "./firebase";

function App() {
  const [state, setstate] = useState([]);
  console.log(state);

  useEffect(() => {
    const foo = async () => {
      const snapshot = await firestore.collection("post").get();

      snapshot.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();

        console.log(data.content);

        console.log(doc.id);

        return setstate();
      });
    };

    foo();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
