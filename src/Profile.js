import React from "react";
import "./Profile.css";

function Profile() {
  return (
    // BEM
    <div>
      <img src="https://scontent.fdel11-2.fna.fbcdn.net/v/t1.0-9/119685004_10165461741655725_1282727048703966395_n.png?_nc_cat=108&_nc_sid=e3f864&_nc_ohc=5ZFdoIjLha8AX97Jv56&_nc_ht=scontent.fdel11-2.fna&oh=cef150ecba047cb5c3011eb2764c7566&oe=5F9026BA" width="100%" height="auto" />
      <div class="image-cropper">
      <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babef3da7ea4342a948c024%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1314%26cropX2%3D2845%26cropY1%3D222%26cropY2%3D1752" alt="avatar" class="profile-pic" />
      </div>
      <h1>Donald Trump</h1>
      <h2>@realDonaldTrump</h2>
      <h5>45th President of the United States of America</h5>
    </div>
  );
}

export default Profile;
