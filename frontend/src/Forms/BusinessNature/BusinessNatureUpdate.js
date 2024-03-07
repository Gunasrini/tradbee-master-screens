import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function BusinessNatureUpdate() {
    const { bnid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        bn: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmbusinessnature/' + bnid)
            .then(res => res.json())
            .then(data => setValues({ ...values, bn: data[0].bn }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmbusinessnature/' + bnid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/business-nature");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Business Nature</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Business Nature' value={values.bn} onChange={(e) => setValues({ ...values, bn: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
