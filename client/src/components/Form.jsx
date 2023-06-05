import React from "react";
import Audio from "./MusicPlayer.jsx"

function Form(){
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div>
        <form action="" onSubmit={handleSubmit}>
        <div class="dots"></div>
        <h1>Patient &nbsp; &nbsp;  Details</h1>
    
        <div className="row">
            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter your name" required />
        </div>
       
            <div className="row">
            <fieldset>
            <legend>Gender</legend>
            <input type="radio" name="gender" id="male"required /> <t>Male</t>
            <input type="radio" name="gender" id="female"required /><t>Female</t>
            </fieldset>
            </div>
        
            <div className="row">
            <label>Address: </label>
            <input type="text" name ="streetAddress" placeholder="Street Address" />
             <div className="samecol addresscol">
                <input type="text" name="cityname" placeholder="City" />
                <input type="text" name="statename" placeholder="State" />
                <input type="text" name="countryname" placeholder="Country" />
                <input type="number" name="pincode" id="pincode" placeholder="Enter pincode" required />
             </div>
            
            </div>
        <div className="row">
            <div className="samecol">
            <div>
                <label>Email:</label> <input type="email" name="email" id="email" placeholder="abc@gmail.com" required />
            </div>
            <div>
            <label>Phone:</label> <input type="number" name="phonenum" id="phonenum" placeholder="Enter Phone no." required />
            </div>
           </div>
        </div> 
        
        
        <div className="row">
            <label>DOB :</label> <input type="date" name="dob" required pattern="\d{4}-\d{2}-\d{2}" />
        </div>  
        <div className="buttons">
     <div className="resetInfo"><input type="reset" value="Reset"/></div> 
     <div className="register"><input type="submit" value="Submit" /></div>
     </div>
     
    </form>
        </div> 
    );
}

export default Form;