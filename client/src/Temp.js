import React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
const Temp = () => {
  return (
    <div className="flex flex-col h-[100vh] bg-slate-800 w-[20%] text-white place-items-center">
      <Avatar
        className="mt-6"
        alt="Remy Sharp"
        sx={{ width: 125, height: 125 }}
        src={require("./images/profile_image.jpg")}
      />
      <div className="mt-6 text-xl">Napan Vijayvargiya</div>
      <div className="mt-1 text-base">20BCS141@iiitdmj.ac.in</div>
      <hr className="mt-6 mb-6 h-1 w-[90%] border-2 border-violet-900" />
      <Link to="/">
        <Button size="large" variant="text" startIcon={<DashboardIcon />}>
          Dashboard
        </Button>
      </Link>
      <div className="mt-4">
      <Link to="/Profile">
        <Button size="large" variant="text" startIcon={<AccountCircleIcon />}>
          Profile Page
        </Button>
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/All">
          <Button
            size="large"
            variant="text"
            startIcon={<InsertDriveFileIcon />}
          >
            All Files
          </Button>
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/Saved">
          <Button size="large" variant="text" startIcon={<BookmarkIcon />}>
            Saved Files
          </Button>
        </Link>
      </div>
      <hr className="mt-1 mb-6 h-1 w-[90%] border-2 border-violet-900" />
      <Button
        size="large"
        sx={{ width: "80%" }}
        disableElevation
        variant="contained"
      >
        Log Out
      </Button>
    </div>
  );
};

export default Temp;
