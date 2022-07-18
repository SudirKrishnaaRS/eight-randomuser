import React,{useState,useEffect} from 'react';

import {Container,Row,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios  from "axios";

import './App.css';
import MyCard from './MyCard';
import ViewAgencies from './ViewAgencies';
import ViewUsers from './ViewUsers';



function App() {

  const url = "http://localhost:8080/agencies";
  const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MTM1OTQ1LCJpYXQiOjE2NTgxMTc5NDV9.dQ0ZAgZ8F1lBbPrgeLKybpMUrmg7Hl0r7lMlmSjWxPjxqHhYB_-MnMP5XYWGUeSTeGoZfac7MYdkQJm8WHbsNA";
  const config = {
    headers: {
      Authorization: `Bearer ${token1}`,
    },
  };
  // axios.get(url, config);


  // const token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MDgxMjE4LCJpYXQiOjE2NTgwNjMyMTh9.mD6ThjAKxE2LmH6IeVRr7EHNI46xx98D4saHgpFZiCYFq-XIFisDE4ajLRLfrYatM2BTz4uO4QGh2Lr14h0cdg";
  // const config = {
  //   headers: {
  //     Authorization: 'Bearer ${token}',
  //   },
  // };


  // const [details,setDetails]=useState({});
  const [details,setDetails]=useState([]);


  const fetchDetails = async() => {
  // const {data} = await axios.get('https://randomuser.me/api/');
  // console.log("Response is: ",data);
 
  const {data} = await axios.get(url,config);
  console.log("TMS Agency: ",data);
  setDetails(data);

  // const details=data.results;
  // console.log(" is: ",details);
  // setDetails(details);
 
};

useEffect(() => {
  fetchDetails()
}, []);



  return (
    <div>

{details.map((detail,i) => 
          <ViewUsers detail={detail}/>
        )}



     {/* <Container fluid className="p-4 bg-primary App"> */}
      {/* <Row> */}
      {/* {details.map((detail,i) => <Col key={i} md={4} className="offset-md-4 mt-4"> */}
          {/* <MyCard detail={detail}/> */}
          {/* <ViewAgencies detail={detail}/> */}
          {/* <ViewUsers detail={detail}/> */}
        {/* </Col>)} */}
        {/* <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col> */}
       {/* </Row> */}
      
    {/* </Container> */}
    </div>
  );
}

export default App;
