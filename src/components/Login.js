import React from "react";

function Login() {
  return (
    <div>
      <h1 style={{ "text-align": "center" }}> Login Page</h1>
      <div id="form1" align="center">
        <form
          action="www.google.com"
          method="post"
          name="form"
          onsubmit="return validateForm(),validateemail(),  validatenum() "
        >
          <label> Name : </label>
          <input type="text" placeholder="Enter your name here" name="name" />
          <br />
          <br />
          <label> Email ID : </label>
          <input
            type="text"
            placeholder="Enter your Email ID here"
            name="mail"
          />
          <br />
          <br />
          <label> Mobile No. : </label>
          <input
            type="text"
            placeholder="Enter your mobile no. here"
            name="num"
          />
          <span id="numloc"></span>
          <br />
          <br />
          <label> Address : </label>
          <input
            type="text"
            placeholder="Enter your address here"
            maxlength="100"
          />
          <br />
          <br />
          <label>Choose Your Gender : </label>
          <label for="chk1">
            <input type="radio" id="chk1" name="chk" checked /> Male{" "}
          </label>
          <label for="chk2">
            <input type="radio" id="chk2" name="chk" /> Female{" "}
          </label>
          <label for="chk3">
            <input type="radio" id="chk3" name="chk" /> Others{" "}
          </label>
          <br />
          <br />
          <label>Country Name : </label>
          <select name="country" id="country">
            <option value="India" selected>
              India
            </option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Dubai">Dubai</option>
          </select>
          <br />
          <br />
          <label>What are your hobbies:</label>
          <label for="box1">
            <input type="checkbox" id="box1" name="box" checked />
            Dancing{" "}
          </label>
          <label for="box2">
            <input type="checkbox" id="box2" name="box" />
            Singing{" "}
          </label>
          <label for="box3">
            <input type="checkbox" id="box3" name="box" />
            Reading{" "}
          </label>
          <label for="box4">
            <input type="checkbox" id="box4" name="box" />
            Travelling{" "}
          </label>
          <label for="box5">
            <input type="checkbox" id="box5" name="box" />
            Nothing{" "}
          </label>
          <br />
          <br />
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
