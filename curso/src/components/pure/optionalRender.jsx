import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

// ? Style for user Login
const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: "white",
  fontWeight: "bold",
};

// ? Style for user Logout
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={loggedStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

// ? Expression (true) && expression => the expression is rendered
// ? Expression (false) && expression => the expression is not rendered

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  // const updateAccess = () => {
  //     setAccess(!access);
  // };

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  let OptionalButton;

  // if(access){
  //     OptionalButton = <button onClick={updateAccess}>Logout</button>
  // }else{
  //     OptionalButton = <button onClick={updateAccess}>Logout</button>
  // }

  if (access) {
    OptionalButton = (
      <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    );
  } else {
    OptionalButton = (
      <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    );
  }

  // Un read messages
  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {/* Optional Button */}
      {OptionalButton}
      {/* N Messages unread */}
      {/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message</p> }
            { nMessages > 1 && <p>You have {nMessages} new Messages...</p> }
            { nMessages === 0 && <p>There are no new messages</p> } */}

      {/* Ternay Operator */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 ? "s" : null}
            </p>
          ) : (
            <p>There are no new messages</p>
          )}
          <button onClick={addMessages}>
            {nMessages === 0 ? "Add your first message" : "Add new Message"}
          </button>
        </div>
      ) : null}
      {/* <button onClick={addMessages}>Add new Message</button> */}
    </div>
  );
};

export default OptionalRender;
