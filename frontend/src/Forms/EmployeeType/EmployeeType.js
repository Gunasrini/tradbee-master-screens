import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Col, Form } from 'reactstrap'
import axios from "axios";

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
                alert("Data added successfully!...")
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

    const handleDelete = (emptypeid) => {
        if (confirm("Do you really want to delete this item?!!")) {
            axios.delete('http://localhost:8081/api/deletetmemptype/' + emptypeid)
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
                                        <div className='icons'>
                                            <Link to={`/employee-type/update/${item.emptypeid}`}><span><i className="fas fa-pencil-alt"></i></span></Link>
                                            <span className='text-primary ms-2' onClick={() => handleDelete(item.emptypeid)}><i className="fas fa-trash"></i></span>
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
