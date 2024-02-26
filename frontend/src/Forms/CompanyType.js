import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function EmployeeType() {
    const [cType, setCompType] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { cType };

        fetch('http://localhost:8081/api/companytype', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => alert("Company Type Store Successfully!..."))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetch('http://localhost:8081/api/companytype')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Company Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Company Type' value={cType} onChange={(e) => setCompType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </Form>
            </Col>
            <div className="form-table-content">
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(item => (
                                <tr key={item.ctypeid}>
                                    <td>{item.cType}</td>
                                    <td>
                                        <div className="icons">
                                            <i className="fas fa-eye"></i>
                                            <i className="fas fa-pencil-alt"></i>
                                            <i className="fas fa-trash"></i>
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
