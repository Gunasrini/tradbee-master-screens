import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap';
import axios from "axios";

export default function DocumentTypeUpdate() {
    const { docid } = useParams();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        doctype: '',
    })

    useEffect(() => {
        fetch('http://localhost:8081/api/tmdoctype/' + docid)
            .then(res => res.json())
            .then(data => setValues({ ...values, doctype: data[0].doctype }))
            .catch((err) => console.log(err));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8081/api/updatetmdoctype/' + docid, values)
            .then(res => {
                alert("Data Updated Succssefully!!...");
                navigate("/document-type");
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Document Type</h4>
                </div>
                <Form onSubmit={handleUpdate}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Document Type' value={values.doctype} onChange={(e) => setValues({ ...values, doctype: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>
                </Form>
            </Col>
        </>
    )
}
