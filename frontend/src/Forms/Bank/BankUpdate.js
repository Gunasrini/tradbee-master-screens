import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function BankUpdate() {
    const { bid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        bname: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmbank/' + bid)
            .then(res => res.json())
            .then(data => setValues({ ...values, bname: data[0].bname }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmbank/' + bid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/bank");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Bank Information</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Bank Name' value={values.bname} onChange={(e) => setValues({ ...values, bname: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
