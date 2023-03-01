import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import jobs from "./data/jobs";


function Jobs() {
    function listJobs() {
        return jobs.map((jobs) =>
        <ListGroup.Item key={jobs.id}>
            {jobs.title} | {jobs.company}
        </ListGroup.Item>
    )}

    return (
        <>
            <h1>Jobs</h1>
            <ListGroup className="w-75">
                {listJobs()}
            </ListGroup>
        </>
    )
}

export default Jobs