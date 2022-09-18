import React from "react";
import "../style/NavberStyle.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
export default function Navber() {
  return (
    <div className="contenner">
      <div className="main-navber">
        <div className="search">
          <div className="box-search">
            <AiOutlineSearch className="icon searchh" />
          </div>
          <input type="text" className="hidden" placeholder="test"></input>
        </div>
        <h3>TEST</h3>
        <div className="manu-list">
          <AiOutlineMenu className="icon" />
        </div>
      </div>
    </div>
  );
}
