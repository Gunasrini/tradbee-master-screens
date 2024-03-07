import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function RelationTypeUpdate() {
    const { relid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        relatin: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmrelation/' + relid)
            .then(res => res.json())
            .then(data => setValues({ ...values, relatin: data[0].relatin }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmrelation/' + relid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/relation-type");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Relation Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Relation Type' value={values.relatin} onChange={(e) => setValues({ ...values, relatin: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
