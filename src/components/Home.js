import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import inventoryApi from "../api/inventoryApi";

const Home = () => {
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      fetchTables();
    }
  }, []);

  const fetchTables = async () => {
    try {
      const response = await inventoryApi.fetchTable(); 
      setTables(response);
    } catch (error) {
      console.error("Error fetching tables:", error);
      // Handle error
    }
  };

  // Define a mapping of status values to colors
  const statusColors = {
    "open": "#377980",
    "running": "#008000",
    "reserved": "#B2BEB5",
   
  };

  return (
    <Container className='home-main'>
      {/* Render each table in a separate box */}
      <div className="table-container">
        {tables.map((table, index) => (
          <div 
            key={index} 
            className="table-box" 
            style={{ backgroundColor: statusColors[table.status] || "#ffffff" }} // Apply background color dynamically based on status
          >
            <h2>{table.name}</h2>
            {/* Headers */}
            <div className="headers">
              <p>Status: {table.status}</p>
            </div>
            {/* Table data */}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Home;
