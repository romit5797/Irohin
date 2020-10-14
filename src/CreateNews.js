import React from "react";
import {Button, Form} from 'react-bootstrap';


function CreateNews() {

  return (
   
<div>
    <h3>Create News</h3>
    <br></br>
<Form>
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Article Headline</Form.Label>
    <Form.Control type="text" placeholder="Donald Trump and Melania Trump test postive for COVID-19" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Main Tag</Form.Label>
    <Form.Control type="text" placeholder="@DonaldTrump" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput3">
    <Form.Label>Side Tags</Form.Label>
    <Form.Control type="text" placeholder="@MelaniaTrump, @covid-19" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Article Body</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput4">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" placeholder="www.xyz.com/net.jpg" />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="or attach file" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Label>Article Summary</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput5">
    <Form.Label>Place</Form.Label>
    <Form.Control type="text" placeholder="Dhaula Kuan, New Delhi" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput6">
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Politics" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput7">
    <Form.Label>Video URL</Form.Label>
    <Form.Control type="text" placeholder="www.youtube.com/fgnkfdkbkf" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea3">
    <Form.Label>Citations</Form.Label>
    <Form.Control as="textarea" rows="2" />
  </Form.Group>
  <Button variant="primary" size="lg" block>
    Submit
  </Button>


</Form>
</div>
  );
}

export default CreateNews;
