import React from 'react';
import AgentTableRecord from './AgentTableRecord';

const ViewAgencies = ({detail}) => {
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-offset-1 col-md-10">
                <div className="panel">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col col-sm-3 col-xs-12">
                                <h4 className="title">Agency <span>List</span></h4>
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
                                    {/* <th>#</th> */}
                                    <th>Agent ID</th>
                                    <th>Name</th>
                                    <th>Total Earning</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <AgentTableRecord agntId={detail.agency?.agentId} agntName="ASR Travels" tot_earning="230000"/>
                            <AgentTableRecord agntId="1102" agntName="ABC Travels" tot_earning="230000"/>

                                </table>
                                </div>
                                </div>
                                </div>
                                </div>
        </div>
    )
}

export default ViewAgencies;