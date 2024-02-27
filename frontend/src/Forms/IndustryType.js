import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function IndustryType() {
    const [it, setIndustryType] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { it };

        fetch('http://localhost:8081/api/industrytype', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Industry type added successfully!...")
                showData();
                setIndustryType('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/industrytype')
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
                    <h4>Industry Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Industry Type' value={it} onChange={(e) => setIndustryType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={it.length === 0} className="btn btn-primary">Add</button>
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
                                <tr key={item.itid}>
                                    <td>{item.it}</td>
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
