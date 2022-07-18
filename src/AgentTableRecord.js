import React from "react";

import "./UserTable.css";



const AgentTableRecord=({agntId="***",agntName="*******",tot_earning="*******"})=>(

        <tbody>
                                <tr>
                                    <td>{agntId}</td>
                                    <td>{agntName}</td>
                                    <td>{tot_earning}</td>
                                    <td>
                                        <ul className="action-list">
                                            <li><a href="/#" data-tip="view"><i className="fa fa-eye"></i></a></li>
                                            <li><a href="/#" data-tip="delete"><i className="fa fa-trash"></i></a></li>
                                        </ul>
                                    </td>

                                </tr>

            </tbody>

)



export default AgentTableRecord;