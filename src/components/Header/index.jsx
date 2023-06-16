import React, { useEffect, useRef, useState } from "react";
import { getUsername, logout } from "utilities/api";
import { Overlay, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    let data;
    const fetchUsername = async () => {
      data = await getUsername();
      if (data === "unauthorized") navigate("/login");
      setUsername(data);
    };
    fetchUsername();
  }, []);
  const target = useRef(null);
  return (
    <div className="header">
      <p>Dashboard</p>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        {username}
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Button
            variant="danger"
            onClick={async () => {
              await logout();
              setShow(!show);
              navigate("/login");
            }}
            {...props}
          >
            Logout
          </Button>
        )}
      </Overlay>
    </div>
  );
};
export default Header;
