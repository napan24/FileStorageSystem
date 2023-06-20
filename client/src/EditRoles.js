import React, { useState, useEffect } from "react";
import Temp from "./Temp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
const EditRoles = () => {
  const [users, setUsers] = useState(null);
  const [roles, setRoles] = useState({});
  const findUsers = async () => {
    const res = await fetch("/findUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const result = await res.json();
    setUsers(result.exist);
  };
  const editedRoles = (event, item) => {
    const newState = users.map(obj => {
      if (obj.name === item) {
        return {...obj, Role: event.target.value};
      }
      return obj;
    });
    setUsers(newState);
  };
  const saveRole = async (item) => {
    var email=item.email;
    var role=item.Role;
    const res = await fetch("/saveRole", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,role}),
    });
    const result = await res.json();
    console.log(result);
  };
  useEffect(() => {
    findUsers();
  }, []);
  return (
    <>
      <Temp />
      <div className="flex flex-col w-[80%] bg-black">
        {users != null &&
          users.map((item) => (
            <>
              <div className="flex justify-between mt-6">
                <div className="text-white ml-6 text-xl">{item.name}</div>
                <div className="text-white flex justify-evenly w-[30%]">
                  <FormControl
                    fullWidth
                    sx={{ backgroundColor: "white", width: "120px" }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={item.Role}
                      onChange={(event) => {
                        editedRoles(event, item.name);
                      }}
                    >
                      <MenuItem value="Student">Student</MenuItem>
                      <MenuItem value="Teacher">Teacher</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    sx={{ borderRadius: "10px" }}
                    variant="contained"
                    color="success"
                      onClick={()=>{saveRole(item)}}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default EditRoles;
