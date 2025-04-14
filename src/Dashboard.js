import React from "react";
import { Navbar, Offcanvas, Container, Nav, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom"; import { useState,useEffect } from "react";
import Home from "./Home";

function Dashboard()
{ 
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setname]=useState('');
    const[course,setCourse]=useState('');
    const[data,setData]=useState([]);
    const[val,setval]=useState('');
    const[editflag,seteditflag]=useState("false");
        useEffect(()=>{
     getData();
},[])

  function getData() {
        fetch('https://node-2fkp.onrender.com/getdata') 
      .then(response => response.json())
      .then(fetchedData => {
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          console.error('Fetched data is not an array:', fetchedData);
          setData([]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  

  function manageteachers()
  {}
  const insert = () => {
    const request = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        "first_name": name,
        "id": course
      })
    };

    fetch("https://node-2fkp.onrender.com/insertdata", request)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(req => {
        if (req.status === 200) {
          getData();
          alert("Data inserted successfully");
        } else {
          console.error("Unexpected response:", req);
          alert("Failed to insert data");
        }
      })
      .catch(error => {
        console.error("Error inserting data:", error);
        alert("An error occurred while inserting data");
      });
  };

  function edit(item)
{
    setname(item.first_name);
    setCourse(item.id);
    seteditflag("true");
    setval(item.first_name);
    setname("");
    setCourse("");
}

  function update() {
    const request = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        "first_name": name,
        "id": course
      })
    };

    fetch(`https://node-2fkp.onrender.com/editdata?name=${val}`, request)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(resp => {
        if (resp.status === 200) {
          getData();
          alert("Record updated successfully");
        } else {
          console.error("Unexpected response:", resp);
          alert("Failed to update record");
        }
        seteditflag("false");
      })
      .catch(error => {
        console.error("Error updating data:", error);
        alert("An error occurred while updating data");
      });
  }

  function deletedata(item) {
    const request = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    };

    fetch(`https://node-2fkp.onrender.com/deletedata?name=${item.first_name}`, request)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(resp => {
        if (resp.status === 200) {
          getData();
          alert("Record deleted successfully");
        } else {
          console.error("Unexpected response:", resp);
          alert("Failed to delete record");
        }
      })
      .catch(error => {
        console.error("Error deleting data:", error);
        alert("An error occurred while deleting data");
      });
  }

function visibility()
{
  document.getElementById("form1").style.display='block';
}
function closebtn()
{
  document.getElementById("form1").style.display='none';
}
  function manageroles()
  {}
  function managestudents()
  {}
  function logout()
  {
setFlag(true);
  }
  if (flag) {
    return <Home />;
  }
          return (<>
            <div>
            <Navbar bg="info" expand="lg" variant="info" className="mb-4  py-4">
             
              <img src='https://th.bing.com/th/id/OIP.9Mpq2-41znxyYTL-4jb_UAHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7' width='50' height={50}></img>
                <Navbar.Brand className="text-white">SOFTECH INFOWAYS</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel" className="bg-info text-white">Menu</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/"><b>🏠Home</b></Nav.Link>
              <Nav.Link as={Link} to="/"><b>Log Out</b></Nav.Link>
                     
                      
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              
            </Navbar>
           </div><div className="bg-secondary text-white">
           <br></br><br></br>&ensp;&ensp;&ensp;&ensp;&ensp;
                  <Button variant="info" onClick={handleShow} className="mb-3 text-white">
                    VIEW DASHBOARD
                  </Button>&ensp;&ensp;<Button variant="info" onClick={visibility} className="mb-3 text-white">
                    FORM TO ADD OR EDIT DATA
                  </Button>

                  <Offcanvas className="dashboard-panel bg-info text-white" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title><h2>Dashboard</h2></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <ListGroup variant='flush'>
                      <ListGroup.Item ><Button variant='primary' onClick={getData}> MANAGE USERS</Button></ListGroup.Item>
                      <ListGroup.Item ><Button variant='primary' onClick={manageteachers}> MANAGE TEACHERS</Button></ListGroup.Item>
                      <ListGroup.Item ><Button variant='primary' onClick={managestudents}> MANAGE STUDENTS</Button></ListGroup.Item>
                        <ListGroup.Item ><Button variant='primary' onClick={manageroles}> MANAGE ROLES</Button></ListGroup.Item>
                        <ListGroup.Item ><Button variant='primary' onClick={logout}> LOG OUT</Button></ListGroup.Item>
 
                      </ListGroup>
                    </Offcanvas.Body>
                  </Offcanvas>
                  </div>
                 
             <div className="bg-info">
    <br></br>
    <form id='form1'>
      <h3 align='center'>ADD OR EDIT RECORD</h3><br></br>
             <b>Enter Name:</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <input type="text" placeholder="Enter Name:" value={name} onChange={(event)=>setname(event.target.value)}></input><br></br><br>
             </br><br></br>
             <b>Enter Course:</b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<input type="text" placeholder="Enter Course:" value={course} onChange={(event)=>setCourse(event.target.value)}></input><br></br>
         <br></br>
          <center> {editflag == "true"?<Button variant="outline-light" onClick={update}>UPDATE</Button> : <Button variant='outline-light' onClick={insert}>ADD RECORD</Button>}
          &ensp;&ensp;&ensp;&ensp;<Button variant="outline-light" onClick={closebtn}>CLOSE </Button></center>
      </form><br></br> <table border="5" class="table">
                     <thead>
                         <tr><th>Sr.No</th>
                             <th>FIRST NAME</th>
                             <th>Course ID</th>
                             <th>Action 1</th>
                             <th>Action 2</th>
                         </tr>
                     </thead>
                     <tbody>
                         {Array.isArray(data) && data.map((item,index) =>(
                             <tr key={index}>
                              <td>{index+1}</td>
                                 <td>{item.first_name}</td>
                                 <td>{item.id}</td>
                                 <td><Button variant='primary' onClick={()=>edit(item)}><b>EDIT</b></Button></td>
                                 <td><Button variant='danger' onClick={()=>deletedata(item)}><b>DELETE</b></Button></td>
                             </tr>                ))}
                     </tbody>
                 </table>
         </div>
         </>
         );
            }

          
export default Dashboard;





