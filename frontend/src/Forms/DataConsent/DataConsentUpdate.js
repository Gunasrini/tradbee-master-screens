import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function DataConsentUpdate() {
    const { tdatacid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        tdatac: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmdataconsent/' + tdatacid)
            .then(res => res.json())
            .then(data => setValues({ ...values, tdatac: data[0].tdatac }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmdataconsent/' + tdatacid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/data-consent");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Data Consent Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Data Consent Type' value={values.tdatac} onChange={(e) => setValues({ ...values, tdatac: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
