import React from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

function Activity() {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >
      <SideBar />

      <main
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8f9fa",
          marginLeft: "250px",
        }}
      >
        <section
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
            Activity
          </h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <i
                  className="bi bi-x-circle"
                  style={{ color: "red", marginRight: "10px" }}
                ></i>
                <strong>Letter Rejected</strong>
                <br />
                <small style={{ color: "#888" }}>
                  01 March 2021, at 12:30 AM
                </small>
              </div>
              <span style={{ color: "red", fontWeight: "bold" }}>Rejected</span>
            </li>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ color: "green", marginRight: "10px" }}
                ></i>
                <strong>Letter Approved</strong>
                <br />
                <small style={{ color: "#888" }}>
                  01 March 2021, at 12:30 AM
                </small>
              </div>
              <span style={{ color: "green", fontWeight: "bold" }}>
                Approved
              </span>
            </li>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ color: "green", marginRight: "10px" }}
                ></i>
                <strong>Posted Internship</strong>
                <br />
                <small style={{ color: "#888" }}>
                  01 March 2021, at 07:32 AM
                </small>
              </div>
              <span style={{ color: "green", fontWeight: "bold" }}>Posted</span>
            </li>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ color: "green", marginRight: "10px" }}
                ></i>
                <strong>Posted Program</strong>
                <br />
                <small style={{ color: "#888" }}>
                  28 February 2021, at 12:30 AM
                </small>
              </div>
              <span style={{ color: "green", fontWeight: "bold" }}>Posted</span>
            </li>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ color: "green", marginRight: "10px" }}
                ></i>
                <strong>Posted Internship</strong>
                <br />
                <small style={{ color: "#888" }}>
                  28 February 2021, at 11:39 AM
                </small>
              </div>
              <span style={{ color: "green", fontWeight: "bold" }}>Posted</span>
            </li>
            <li
              style={{
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ color: "green", marginRight: "10px" }}
                ></i>
                <strong>Approved Letter</strong>
                <br />
                <small style={{ color: "#888" }}>
                  28 February 2021, at 07:32 AM
                </small>
              </div>
              <span style={{ color: "green", fontWeight: "bold" }}>
                Approved
              </span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Activity;
