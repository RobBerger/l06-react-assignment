import React from "react";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import jobs from "./data/jobs";
import JobDetail from "./JobDetail";
import { Outlet } from "react-router-dom";


function Jobs() {
    function listJobs() {
        return jobs.map((job) =>
        <ListGroup.Item key={job.title}>
            {job.title} | {job.company}
        </ListGroup.Item>
    )}

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <ListGroup className="w-100">
                                {listJobs()}
                            </ListGroup>
                        </td>
                        <td>
                        <Outlet/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            
        </>
    )
}

export default Jobs