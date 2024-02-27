import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function CollateralType() {
    const [ct, setCollateralType] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { ct };

        fetch('http://localhost:8081/api/collateraltype', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Collateral type added successfully!...")
                showData();
                setCollateralType('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/collateraltype')
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
                    <h4>Collateral Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Collateral Type' value={ct} onChange={(e) => setCollateralType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={ct.length === 0} className="btn btn-primary">Add</button>
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
                                <tr key={item.ctid}>
                                    <td>{item.ct}</td>
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
