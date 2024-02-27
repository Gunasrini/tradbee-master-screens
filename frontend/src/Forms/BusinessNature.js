import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function BusinessNature() {
    const [bn, setBusinessNature] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { bn };

        fetch('http://localhost:8081/api/businessnature', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Business nature added successfully!...")
                showData();
                setBusinessNature('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/businessnature')
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
                    <h4>Business Nature</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Business Nature' value={bn} onChange={(e) => setBusinessNature(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={bn.length === 0} className="btn btn-primary">Add</button>
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
                                <tr key={item.bnid}>
                                    <td>{item.bn}</td>
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
