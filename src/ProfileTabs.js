import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Post from "./Post";

class ProfileTabs extends React.Component {

  
  render() {
    return (
      <div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
  <Button variant="outline-primary">Primary</Button>{' '}
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Post />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Post />
  </Tab>
</Tabs>
      </div>
    );
  }
  
 
}


export default ProfileTabs;