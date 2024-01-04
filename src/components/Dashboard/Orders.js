import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

// Generate Order Data
function createData(id, date, name, shipTo, ContactNo, amount,Status) {
  return { id, date, name, shipTo, ContactNo, amount,Status };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {

  const handleDeliver = (orderId) => {


    fetch(`/api/orders/${orderId}/deliver`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          
        } else {
          
        }
      })
      .catch((error) => {
      
      });
  };
  

  const [orders, getorders] = useState([]);
const getOrders = ()=>{
  fetch("http://localhost:5000/api/admin/allPurchase")
  .then((res) => res.json())
  .then((json) => getorders(json));
}

const [name,getname]=useState("");
const getName =()=>{

  fetch("http://localhost:5000/api/admin/allUsers")
  .then((res) => res.json())
  .then((json) => getname(json));
}

const updateOne = (id)=>{
  console.log('hrr',id)
  fetch("http://localhost:5000/api/admin/updatePurchase",{
    body: JSON.stringify({
      id:id,
      
    }),
  })
  .then((res) => res.json())
  .then((json) => console.log(json));
}

const updateOrder = async (id) => {

  try {
    let res = await fetch(`http://localhost:5000/api/admin/updatePurchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:id,
        
      }),
    });
    let resJson = await res.json();
    console.log(resJson);
    if (res.status === 200) {
      alert("Updated successfully");
      getOrders();
    } else {
      alert("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};



useEffect(() => {
  getOrders();
  
  
},[]);
  console.log("orders",orders);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell >Sale Amount</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
              <TableCell >{`$${row.amount}`}</TableCell>
              <TableCell>
  {row.Status ? "Delivered" : (
    <Button variant="contained" color="primary" onClick={() => updateOrder(row._id)}>Deliver</Button>
  )}
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}