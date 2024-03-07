import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Form } from 'reactstrap'
import axios from "axios";

export default function Bank() {
    const [tdatac, setDataConsent] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { tdatac };

        fetch('http://localhost:8081/api/dataconsent', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Data consent added successfully!...")
                showData();
                setDataConsent('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/dataconsent')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        showData();
    }, []);

    const handleDelete = (tdatacid) => {
        if (window.confirm("Do you really want to delete this item?!!")) {
            axios.delete('http://localhost:8081/api/deletetmdataconsent/' + tdatacid)
                .then(() => {
                    alert("Item Deleted Successfully..!!")
                    showData();
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Data Consent</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Data Consent' value={tdatac} onChange={(e) => setDataConsent(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={tdatac.length === 0} className="btn btn-primary">Add</button>
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
                                <tr key={item.tdatacid}>
                                    <td>{item.tdatac}</td>
                                    <td>
                                        <div className='icons'>
                                            <Link to={`/data-consent/update/${item.tdatacid}`}><span><i className="fas fa-pencil-alt"></i></span></Link>
                                            <span className='text-primary ms-2' onClick={() => handleDelete(item.tdatacid)}><i className="fas fa-trash"></i></span>
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
