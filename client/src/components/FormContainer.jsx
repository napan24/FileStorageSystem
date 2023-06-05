import React from "react";
import Form from "./Form";
import Music from "./MusicPlayer";

function contents(){
    return(
    <div className="container">
        <Music/>
        <Form/>
    </div>
    );
}

export default contents;