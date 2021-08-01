import React from "react";
import "./Footer.css";
import { Form, Button, FormControl, } from "react-bootstrap";

export default function Footer() {
  return (
    <div class="footer">
      <div class="row">
       
        <div class="col-md-12 col-lg-12 col-sm-12">
          <ul class="box">
            <li class="bp">
              <a href="#">Applications are open for YC Winter 2022</a>
             
            </li>
          
            <li class="container">
         <a href="#">Guidelines</a>
              <a href="#">FAQ </a>
              <a href="#"> API </a>
              <a href="#">Lists </a>
              <a href="#">Security</a>
              <a href="#"> Legal</a>
              <a href="#">  Contact</a>



            </li>
          </ul>
           <form>
            {/* <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
               <input class=".form-control-sm " type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-success my-1 " type="submit">Search</button>
          </form> 
         
        </div>
      </div>
    </div>
  
  );
}
