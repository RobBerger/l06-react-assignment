import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import './data/jobs.json';


function Jobs(props) {
    let jobs = jobs.json;
    console.log(jobs);

    // function jobs() {
    //     if (props.jobs === null) return
    //     return props.jobs.map((jobs) =>
    //     <ListGroup.Item key={jobs.id}>
    //         {jobs()}
    //     </ListGroup.Item>
    // )}

    return (
        jobs
        // <>
        //     <h1>Jobs</h1>
        //     <ListGroup className="w-75">
        //         {jobs()}
        //     </ListGroup>
        // </>
    )
}

export default Jobs