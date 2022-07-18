import React,{useState,useEffect} from 'react';
import axios  from "axios";
import ViewUsers from './ViewUsers';
// import ViewUsers from '../../Admin/ViewUsers';



const ViewUsersController=()=>{

    const url = "http://localhost:8080/agencies";

    const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MTM1OTQ1LCJpYXQiOjE2NTgxMTc5NDV9.dQ0ZAgZ8F1lBbPrgeLKybpMUrmg7Hl0r7lMlmSjWxPjxqHhYB_-MnMP5XYWGUeSTeGoZfac7MYdkQJm8WHbsNA";
    const config = {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      };
      const [details,setDetails]=useState([]);
      const fetchDetails = async() => {
        const {data} = await axios.get(url,config);
        console.log("TMS Agency: ",data);
        setDetails(data);
      };

    useEffect(() => {
    fetchDetails()
    }, []);

    console.log(details);
    return(
        <div>
        {details.map((detail,i) =>

            <ViewUsers detail={detail}/>

        )}
        </div>

    )

}



export default ViewUsersController;