import { useEffect, useState } from "react";
import "./App.css";
import { firestore } from "./firebase";
import ShowData from "./components/ShowData";

function App() {
  const [state, setstate] = useState([]);
  // console.log(state);

  useEffect(() => {
    const foo = async () => {
      //fetching data from firestore
      const snapshot = await firestore.collection("post").get();

      const arr = [];
      snapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return arr.push({ id, data });
      });

      console.log(arr);
      setstate(arr);
    };

    foo();
  }, []);

  return (
    <div className="App">
      <div className="read-data">
        <div className="operation-1">
          <h1>1. Reading Data From FireStore</h1>
        </div>

        <div className="dynamic-data">
          {state
            .slice(0)
            .reverse()
            .map((value) => {
              return (
                <ShowData
                  id={value.id}
                  title={value.data.title}
                  content={value.data.content}
                  user={value.data.user.name}
                  age={value.data.user.age}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
