import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function EmployeeType() {
    const [empType, setEmpType] = useState("");
    const [empTypeDesc, setEmpTypeDesc] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { empType, empTypeDesc };

        fetch('http://localhost:8081/api/tmemptype', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Employee type added successfully!...")
                showData();
                setEmpType('');
                setEmpTypeDesc('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/tmemptype')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        showData();
    }, []);

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Employee Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Employee Type' value={empType} onChange={(e) => setEmpType(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <textarea className='form-control textarea' placeholder='Employee Description' value={empTypeDesc} onChange={(e) => setEmpTypeDesc(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={empType.length === 0 || empTypeDesc.length === 0} className="btn btn-primary">Add</button>
                    </div>
                </Form>
            </Col>
            <div className="form-table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(item => (
                                <tr key={item.emptypeid}>
                                    <td>{item.empType}</td>
                                    <td>{item.empTypeDesc}</td>
                                    <td>
                                        <div className="icons">
                                            <span><i className="fas fa-eye"></i></span>
                                            <span><i className="fas fa-pencil-alt"></i></span>
                                            <span><i className="fas fa-trash"></i></span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
