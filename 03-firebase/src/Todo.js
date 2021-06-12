import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import ShowData from "./components/ShowData";
import InputData from "./components/InputData";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { auth } from "./firebase";
import { auth, provider } from "./firebase";

function Todo(props) {
  const [userProfile, setuserProfile] = useState("");

  const [userName, setuserName] = useState("");
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

      setstate(arr);
    };

    foo();
  }, [state]);

  useEffect(() => {
    props.usersInfo.map((val) => {
      setuserName(val.name);
      setuserProfile(val.image);
      return console.log("");
    });
  }, [props.usersInfo]);

  const logout = () => {
    auth.signOut().then(() => {
      props.logout(false);
      localStorage.clear();
    });
  };

  return (
    <div className="Todo">
      <div className="user">
        <div className="user-Profile">
          <img src={userProfile} alt="user" />
        </div>
        <div className="user-name">
          <h3>{userName}</h3>
          <div className="logout">
            <ExitToAppIcon onClick={logout} />
          </div>
        </div>
      </div>
      <div className="read-data">
        <div className="operation-1">
          <h1>1. Reading Data From FireStore</h1>
        </div>

        <div>
          <InputData />
        </div>
        <div className="dynamic-data">
          {state.map((value) => {
            return (
              <ShowData
                id={value.id}
                title={value.data.title}
                // content={value.data.content}
                // user={value.data.user.name}
                // age={value.data.user.age}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
