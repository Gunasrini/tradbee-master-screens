import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function CompanyTypeUpdate() {
    const { ctypeid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        ctype: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmcompanytype/' + ctypeid)
            .then(res => res.json())
            .then(data => setValues({ ...values, ctype: data[0].ctype }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmcompanytype/' + ctypeid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/company-type");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Company Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Company Type' value={values.ctype} onChange={(e) => setValues({ ...values, ctype: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
