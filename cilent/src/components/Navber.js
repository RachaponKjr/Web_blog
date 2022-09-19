import React, { useState } from "react";
import "../style/NavberStyle.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
export default function Navber() {
  const [open,setOpen] = useState(false)
  return (
    <>
    <div className="contenner">
      <div className="main-navber">
        <div className="search">
          <div className="box-search">
            <AiOutlineSearch className="icon searchh" />
          </div>
          <input type="text" className="hidden border-line" placeholder="Search"></input>
        </div>
        <h3>SHOP</h3>
        <div className="manu-list">
          <AiOutlineMenu className="icon"/>
        </div>
      </div>

   </div>

     <div className="manu-at">
      <div className="body-manu">
        <h2 className="haderlogin">กรุณาเข้าระบบ</h2>
        <div className="login boder">
          <h3>Login</h3>
        </div>
        <div className="register boder">
          <h3>Register</h3>
        </div>
      </div>
    </div>
</>
  );
}
