import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import jobs from './data/jobs';

function JobDetail() {
    let params = useParams();
    let id = params.jobid;

    let job = jobs.find(j => j.id.toString() === id.toString());

    return (
        <Card className='align-self-start w-100'>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.company}</Card.Text>
                <Card.Text><strong>Discription:</strong> {job.description}</Card.Text>
                <Card.Text><strong>Duration:</strong> {job.duration}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default JobDetail