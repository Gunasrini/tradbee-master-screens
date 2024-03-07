import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function EmployeeUpdate() {
    const { emptypeid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        emptype: '',
        emptypedesc: ''
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmemptype/' + emptypeid)
            .then(res => res.json())
            .then(data => setValues({ ...values, emptype: data[0].emptype, emptypedesc: data[0].emptypedesc }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmemptype/' + emptypeid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Employee Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Employee Type' value={values.emptype} onChange={(e) => setValues({ ...values, emptype: e.target.value })} />
                    </div>
                    <div className='mb-4'>
                        <textarea className='form-control textarea' placeholder='Employee Description' value={values.emptypedesc} onChange={(e) => setValues({ ...values, emptypedesc: e.target.value })}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
