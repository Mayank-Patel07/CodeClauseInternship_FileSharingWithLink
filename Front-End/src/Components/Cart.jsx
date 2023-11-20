import React, { useRef, useState, useEffect } from "react";
import { uploadData } from "./GetData";

export default function Cart() {
  const inputRef = useRef();
  const [file, setfile] = useState("");
  const [final, setfinal] = useState("");
  const handleClick = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    const getFiles = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadData(data);
        setfinal(response.path);
      }
    };
    getFiles();
  }, [file]);
  // console.log(file);
  return (
    <>
      <div class="main">
        <div class="square">
          <img
          // src="/laika-notebooks-l24Db2ApdFM-unsplash.jpg"
          src="/caspar-camille-rubin-HUBNTCzE-R8-unsplash.jpg"
            class="mask"
          />
          <div class="h1">File Sharing App</div>
          <p className="text-dark">Up load the file and share it</p>

          <div>
            <button class="button" onClick={handleClick}>
              Upload
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              ref={inputRef}
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
            />
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3px",
              }}
              href={final}
            >
              {final}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
