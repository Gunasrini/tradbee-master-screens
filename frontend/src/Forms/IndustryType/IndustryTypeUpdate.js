import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function IndustryTypeUpdate() {
    const { itid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        it: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmindustrytype/' + itid)
            .then(res => res.json())
            .then(data => setValues({ ...values, it: data[0].it }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmindustrytype/' + itid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/industry-type");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Industry Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Industry Type' value={values.it} onChange={(e) => setValues({ ...values, it: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
