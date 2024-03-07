import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function CollateralTypeUpdate() {
    const { ctid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ct: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmcollateraltype/' + ctid)
            .then(res => res.json())
            .then(data => setValues({ ...values, ct: data[0].ct }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmcollateraltype/' + ctid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/collateral-type");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Collateral Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Collateral Type' value={values.ct} onChange={(e) => setValues({ ...values, ct: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
