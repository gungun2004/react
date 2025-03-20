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

  function getData()
  {
    fetch("https://apifortesting.netlify.app/.netlify/functions/app/getemployees").then(res=>res.json()).then(result=>setData(result));
  }
  function manageteachers()
  {}
  const insert = () => {
    console.log(JSON.stringify({
      "Name": name,
      "Course": course
    }));
   
const request=
{
method:'post',
headers:{'Content-type':'application/JSON'},
body:(JSON.stringify(
    {       
"Name":name,
"Course":course
    }

))
};
fetch("https://apifortesting.netlify.app/.netlify/functions/app/insertemployees",request).then(res=>res.json()).then(req=>
{
if(req.status==200)
{    getData();
alert("data Inserted Successfully");
}
});
  }
  function edit(item)
{
    setname(item.Name);
    setCourse(item.Course);
    seteditflag("true");
    setval(item.Name);
    setname("");
    setCourse("");
}

  function update(item)
{
    const request=
    {
        method:'PUT',
        headers:{'Content-type':'application/JSON'},
        body: JSON.stringify({
            "Name": name,
            "Course": course
        })
    }
fetch(`https://apifortesting.netlify.app/.netlify/functions/app/updateemployees?name=${val}`,request).then((res)=>{res.json().then((resp)=>{
    if (resp.status==200)
    {
getData();
alert("record updated successfully");
    }})
seteditflag("false");
})
}
function deletedata(item)
{
           
    const request=
    {
        method:'DELETE',
        headers:{'Content-type':'application/JSON'},
    }
        fetch(`https://apifortesting.netlify.app/.netlify/functions/app/deleteemployees?name=${item.Name}`, request)
            .then(res => res.json())
            .then(resp => {
                if (resp.status == 200) {
                  getData();
                    alert("Record deleted successfully");
                }
            })
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
                             <th>Name</th>
                             <th>Course</th>
                             <th>Action 1</th>
                             <th>Action 2</th>
                         </tr>
                     </thead>
                     <tbody>
                         {data.map((item,index) =>(
                             <tr>
                              <td>{index+1}</td>
                                 <td>{item.Name}</td>
                                 <td>{item.Course}</td>
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





