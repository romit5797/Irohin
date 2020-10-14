import React from "react";
import "./ProfileCard.css";
import ProfileTabs from "./ProfileTabs";
import Button from 'react-bootstrap/Button';
import Post from "./Post";

function ProfileCard() {

  return (
    // BEM
    
<div class="container">
<div class="row">
<h1>People page</h1>


<div class="twPc-div">
	
    <div class="twPc-block">
	<img alt="Blue blah blue" src="https://c.files.bbci.co.uk/1602D/production/_113575109_gettyimages-1257468292-1.jpg" class="twPc-bg" />
	
	<div class="twPc-button">
    <Button variant="outline-primary" size="lg">Follow</Button>
	</div>

	<div class="twPc-avatarLink">
	<img alt="Mert Salih Kaplan" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" class="user"/>
	</div>	

	<div class="twPc-divUser">
			<div class="twPc-divName">
				<a href="https://twitter.com/desain360">Donald Trump</a>
			</div>
			<span>
				<a href="https://twitter.com/desain360">@<span>DonaldTrump</span></a>
			</span>
			<h5>45th President of the United States of America 🇺🇸</h5>
	</div>

	</div>
</div>

</div>
<div>
<Post />
<Post />
<Post />
</div>
</div>
  );
}

export default ProfileCard;
