import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as constants from "../constants/CONSTANT";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [permissions, setPermissions] = useState();
  const [userInfo, setUserInfo] = useState({});

  const location = useLocation();
  useEffect(() => {
    try {
      if (localStorage.getItem("token")) {
        let user = jwt_decode(localStorage.getItem("token"));
        //.log("user:", user);
        setUserInfo(user);

        var perm = user.permissions
          .map(function (obj) {
            return obj.name;
          })
          .join(";");
        //.log("perm:", perm);
        setPermissions(perm);
      }
    } catch (error) {
      //.log(error);
    }
  }, []);
  return (
    <>
      <nav id="sidebar" className="">
        <div className="sidebar-header text-center">
          <div className="pb-1">
            <img src='/sthapathya-logo.png' />
          </div>
        </div>

        <ul
          className="list-unstyled components"
          style={{ borderTop: "1px solid #ddd" }}
        >
          {/* <li className={`${
                location.pathname.charAt(location.pathname.length - 1).includes("/") ? "active" : ""
              }`}>
            <Link to="/" >
              {" "}
              <i className="fa-solid fa-house mx-2 " ></i> Home
            </Link>
          </li> */}
           <li className={`${location.pathname.charAt(location.pathname.length - 1).includes("/") ? "active" : ""}`}>
              <Link to="/">
                {" "}
                <i  className={`fa-solid fa-house mx-2 ${location.pathname.charAt(location.pathname.length - 1).includes("/") ? "active" : "inactive"}`} ></i> Home
              </Link>
            </li>
     
          {permissions &&
          (permissions.indexOf(constants.VIEW_LEAD) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
              <li className={`${location.pathname.includes("/leads") ? "active" : ""}`}>
              <Link to="/leads">
                {" "}
                <i className={`fa-solid fa-bolt mx-2 ${location.pathname.includes("/leads") ? "active" : "inactive"}`} ></i> Leads
              </Link>
            </li>
          ) : (
            ""
          )}
          
          {permissions &&
          (permissions.indexOf(constants.VIEW_CONTACT) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            // <li
            //   className={`${
            //     location.pathname.includes("/contacts") ? "active" : ""
            //   }`}
            // >
            //   <Link to="/contacts">
            //     {" "}
            //     <i className="fa-solid fa-address-book mx-2"></i> Contacts
            //   </Link>
            // </li>
            <li className={`${location.pathname.includes("/contacts") ? "active" : ""}`}>
            <Link to="/contacts">
              {" "}
              <i  className={`fa-solid fa-address-book mx-2 ${location.pathname.includes("/contacts") ? "active" : "inactive"}`}></i> Contacts
            </Link>
          </li>
          ) : (
            ""
          )}

         

          {permissions &&
          (permissions.indexOf(constants.VIEW_PROPERTY) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/properties") ? "active" : ""
              }`}
            >
              <Link to="/properties">
                {" "}
                <i  className={`fa-solid fa-building mx-2 ${location.pathname.includes("/properties") ? "active" : "inactive"}`}></i> Inventory
              </Link>
            </li>
          ) : (
            ""
          )}

          <li
            className={`${location.pathname.includes("/sitevisit") ? "active" : ""
              }`}
          >
            <Link to="/sitevisit">
              {" "}
              &nbsp;             
              <i  className={`fa-solid fa-map-location-dot ${location.pathname.includes("/sitevisit") ? "active" : "inactive"}`}></i> &nbsp; Site Visit
            </Link>
          </li>

          {permissions &&
          (permissions.indexOf(constants.VIEW_PROPERTY) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/attendance") ? "active" : ""
              }`}
            >
              <Link to="/attendance">
                {" "}
                <i  className={`far fa-calendar-check mx-2 ${location.pathname.includes("/attendance") ? "active" : "inactive"}`}></i> Attendance
              </Link>
            </li>
          ) : (
            ""
          )}

         {permissions &&
          (permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
          <li
            className={`${
              location.pathname.includes("/enquiry") ? "active" : ""
            }`}
          >
            <Link to="/enquiry">
              {" "}
              <i className={`fa fa-question-circle mx-2 ${location.pathname.includes("/enquiry") ? "active" : "inactive"}`}></i>Enquiry
            </Link>
          </li>
          ) : (
            ""
          )}

        {permissions &&
          (permissions.indexOf(constants.VIEW_PROPERTY) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/dailytasklist") ? "active" : ""
              }`}
            >
              <Link to="/dailytasklist">
                {" "}
                <i  className={`fa-solid fa fa-tasks mx-2 ${location.pathname.includes("/dailytasklist") ? "active" : "inactive"}`} ></i> Daily Task
              </Link>
            </li>
          ) : (
            ""
          )}

          {permissions &&
          (permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/transactions") ? "active" : ""
              }`}
            >
              <Link to="/transactions">
                <i  className={`fa fa-money mx-2 ${location.pathname.includes("/transactions") ? "active" : "inactive"}`}></i> Income /
                Expense
              </Link>
            </li>
          ) : (
            ""
          )}

          {permissions &&
          (permissions.indexOf(constants.VIEW_CONTACT) >= 0 ||
            permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/meetings") ? "active" : ""
              }`}
            >
              <Link to="/meetings">
                
                <i className={`fa-solid fa-calendar-days mx-2 ${location.pathname.includes("/meetings") ? "active" : "inactive"}`} > </i> Meetings
              </Link>
            </li>
          ) : (
            ""
          )}

          {permissions &&
          ( permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/users") ? "active" : ""
              }`}
            >
              <Link to="/users">
                {" "}
                <i className={`fa-solid fa-user mx-2 ${location.pathname.includes("/users") ? "active" : "inactive"}`} > </i> Users
              </Link>
            </li>
          ) : (
            ""
          )}

          {permissions &&
          (permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
            <li
              className={`${
                location.pathname.includes("/reports") ? "active" : ""
              }`}
            >
              <Link to="/reports">
                {" "}
                <i className={`fa-solid fa-chart-simple mx-2 ${location.pathname.includes("/reports") ? "active" : "inactive"}`}> </i> Reports
              </Link>
            </li>
          ) : (
            ""
          )}

          <li
            className={`${
              location.pathname.includes("/Todo") ? "active" : ""
            }`}
          >
            <Link to="/Todo">
              <i className={`fa-solid fa-list mx-2 ${location.pathname.includes("/Todo") ? "active" : "inactive"}`}></i> To-Do
            </Link>
          </li>

          <li
            className={`${
              location.pathname.includes("/myprofile") ? "active" : ""
            }`}
          >
            <Link to="/myprofile">
              {" "}
              <i className={`fa fa-user-circle mx-2 ${location.pathname.includes("/myprofile") ? "active" : "inactive"}`} ></i>My Profile
            </Link>
          </li>

          {permissions &&
          (permissions.indexOf(constants.MODIFY_ALL) >= 0) ? (
          <li
            className={`${
              location.pathname.includes("/importdata") ? "active" : ""
            }`}
          >
            <Link to="/importdata">
              {" "}
              <i className={`fa fa-file-import mx-2 ${location.pathname.includes("/importdata") ? "active" : "inactive"}`} ></i>Data Mining
            </Link>
          </li>
          ) : (
            ""
          )}

          <li>
            <div
              className="mx-4 mt-4"
              style={{  color: "#fff", textAlign: "center" }}
            >
              <img
                style={{ width: "150px", paddingTop: "1rem" }}
                src="/sidebar-black.png"
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
