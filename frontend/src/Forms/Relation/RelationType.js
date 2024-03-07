import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Form } from 'reactstrap'
import axios from "axios";

export default function RelationType() {
    const [relatin, setRelationType] = useState("");

    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { relatin };

        fetch('http://localhost:8081/api/relation', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(() => {
                alert("Data added successfully!...")
                showData();
                setRelationType('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/relation')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        showData();
    }, []);

    const handleDelete = (relid) => {
        if (window.confirm("Do you really want to delete this item?!!")) {
            axios.delete('http://localhost:8081/api/deletetmrelation/' + relid)
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
                    <h4>Relation Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Relation Type' value={relatin} onChange={(e) => setRelationType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={relatin.length === 0} className="btn btn-primary">Add</button>
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
                                <tr key={item.relid}>
                                    <td>{item.relatin}</td>
                                    <td>
                                        <div className='icons'>
                                            <Link to={`/relation-type/update/${item.relid}`}><span><i className="fas fa-pencil-alt"></i></span></Link>
                                            <span className='text-primary ms-2' onClick={() => handleDelete(item.relid)}><i className="fas fa-trash"></i></span>
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
