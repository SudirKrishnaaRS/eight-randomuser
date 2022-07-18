import React from 'react';

import {Card,CardBody,CardTitle,CardText} from "reactstrap";
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from "react-icons/fa";

const MyCard = ({detail}) => {
    return(
        <Card>
            <CardBody className='text-center'>
                {/* <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={detail.picture?.large}/> */}
                <CardTitle className='text-primary'>
                    <h1>
                        <span>{detail.agency?.agentId} </span>
                        <span>{detail.agency?.name} </span>
                        <span>{detail.agency?.totalEarnings} </span>
                    </h1>
                </CardTitle>
                <CardText>
                   <p><FaMapMarkedAlt/> {detail.location?.city}</p>
                    <p><FaPhone/> {detail.phone}</p>
                    <p><FaEnvelope/> {detail.email}</p>
                    <p>Age: {detail.dob?.age}</p>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;