import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./App.css";

const App = () => {
  const [dynamicBg, setDynamicBg] = useState("#FFF");

  const [dynamicSecondaryBg, setDynamicSecondaryBg] = useState("#000");

  const [showPicker, setShowPicker] = useState(0);

  const [showSecondaryPicker, setshowSecondaryPicker] = useState(0);

  const [dynamicImage, setdynamicImage] = useState("");

  const handleChangeComplete = (color) => {
    setDynamicBg(color.hex);
  };

  const showColorPicker = () => {
    setShowPicker(1);
  };

  const showClose = () => {
    setShowPicker(0);
  };

  const showSecondaryColorPicker = () => {
    setshowSecondaryPicker(1);
  };

  const showSecondaryClose = () => {
    setshowSecondaryPicker(0);
  };

  const handleSecondaryChangeComplete = (scolor) => {
    setDynamicSecondaryBg(scolor.hex);
  };

  const handleImagePath = (e) => {
    const path = `./img/${e.target.files[0].name}`;

    // const newpath = `./img/${path.replace(/^.*[\\\/]/, "")}`;
    // console.log(path);

    setdynamicImage(path);
  };
  return (
    <>
      <div className="app" style={{ backgroundColor: dynamicBg }}>
        <div className="toolBox">
          <label htmlFor="background">
            <p style={{ color: dynamicSecondaryBg }}>Background Image :</p>
          </label>

          <input
            className="styelInput"
            type="file"
            value=""
            onChange={handleImagePath}
          />
        </div>

        <div className="toolBox">
          <label htmlFor="background">
            <p style={{ color: dynamicSecondaryBg }}>Logo Image :</p>
          </label>
          <input className="styelInput" type="file" value="" />
        </div>

        <div className="toolBox">
          <label htmlFor="background">
            <p style={{ color: dynamicSecondaryBg }}>Primary Color :</p>
          </label>

          <div className="showColorPicker">
            {showPicker === 0 ? (
              <p className="styelText" onClick={showColorPicker}>
                Show Color Picker
              </p>
            ) : (
              <div className="colorPicker">
                <div className="close" onClick={showClose}>
                  X
                </div>
                <SketchPicker
                  color={dynamicBg}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
            )}
          </div>
        </div>

        <div className="toolBox">
          <label htmlFor="background">
            <p style={{ color: dynamicSecondaryBg }}>Secendory Color :</p>
          </label>

          <div className="showColorPicker">
            {showSecondaryPicker === 0 ? (
              <p className="styelText" onClick={showSecondaryColorPicker}>
                Show Color Picker
              </p>
            ) : (
              <div className="colorPicker">
                <div className="close" onClick={showSecondaryClose}>
                  X
                </div>
                <SketchPicker
                  color={dynamicSecondaryBg}
                  onChangeComplete={handleSecondaryChangeComplete}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="displayImage">{dynamicImage}</div>
    </>
  );
};
export default App;
