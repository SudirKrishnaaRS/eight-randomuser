import React from 'react';
import "./UserTable.css"
import TableRecord from "./TableRecord";
const ViewUsers=({detail}) => {
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-offset-1 col-md-10">
                <div className="panel">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col col-sm-3 col-xs-12">
                                <h4 className="title">User <span>List</span></h4>
                            </div>
                            <div className="col-sm-9 col-xs-12 text-right">
                                <div className="btn_group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    {/* <button className="btn btn-default" title="Reload"><i className="fa fa-sync-alt"></i></button>
                                    <button className="btn btn-default" title="Pdf"><i className="fa fa-file-pdf"></i></button>
                                    <button className="btn btn-default" title="Excel"><i className="fas fa-file-excel"></i></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Role</th>
                                    <th>Agency Name</th>
                                    <th>Agency Total Earning</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <TableRecord userId={detail.userId} firstName={detail.userFirstName} lastName={detail.userLastName} userName={detail.userName} role={detail.role[0]?.roleId} agencyName={detail.agency?.name} agencyEarning={detail.agency?.totalEarnings}/>
                            {/* <TableRecord userId="2" firstName="user2" lastName="lname2" userName="user2@gmail.com"/>
                            <TableRecord userId="3" firstName="user3" lastName="lname3" userName="user3@gmail.com"/>
                            <TableRecord userId="4" firstName="user4" lastName="lname4" userName="user4@gmail.com"/>
                             */}
                                </table>
                                </div>
                                </div>
                                </div>
                                </div>
        </div>
    )
}

export default ViewUsers;