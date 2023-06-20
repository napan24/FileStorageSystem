import React, { useState, useEffect } from "react";
import Temp from "../Temp";
import { Button } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
const ApproveMedicalFiles = () => {
  const [files, setFiles] = useState(null);
  useEffect(() => {
    getForms();
  }, []);
  const getForms = async () => {
    const res = await fetch("/getForms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const result = await res.json();
    setFiles(result.exist);
  };
  return (
    <>
      <Temp />
      <div className="flex flex-col w-[80%] bg-black">
        <div>
          <div className="text-white text-3xl ml-4 mt-4">Saved Files</div>
          <div className=" flex flex-wrap">
            {files != null &&
              files.map((item) => (
                <>
                  <div style={{ position: "relative" }}>
                    <Button
                    //   onClick={() => {
                    //     openPDF(item.name);
                    //   }}
                    >
                      <div className="basis-1/6 mb-4 bg-amber-400 h-32 rounded-md ml-4 flex justify-center items-center flex-col">
                        <InsertDriveFileIcon
                          sx={{ color: "white", height: "50%", width: "50%" }}
                        />
                        <div className="mt-4 text-base text-white overflow-visible">
                          {item.name}
                        </div>
                      </div>
                    </Button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveMedicalFiles;
