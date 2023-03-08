import React from 'react'
import './profile.css'
import profile from './profile.png';
const Profile = () => {
    return (
        <div className="profileContainer">
            <div className="profile_top">
                <img src={profile} alt="100" id="profile_image" className="inline"></img>

            </div>
            <h1 id="profileText" > Profile</h1>
            <h4>Update your photo and personal details</h4>
          
            <table>
                <tr>
                    <td>Name</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Role</td>
                    <td><input></input></td>
                </tr>
            </table>
        </div>
    )
}

export default Profile