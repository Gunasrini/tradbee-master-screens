import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Form } from 'reactstrap'
import axios from "axios";

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
            .then(() => {
                alert("Data added successfully!...")
                showData();
                setCompType('');
            })
            .catch(err => console.log(err));
    }

    function showData() {
        fetch('http://localhost:8081/api/companytype')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        showData();
    }, []);

    const handleDelete = (ctypeid) => {
        if (window.confirm("Do you really want to delete this item?!!")) {
            axios.delete('http://localhost:8081/api/deletetmcompanytype/' + ctypeid)
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
                    <h4>Company Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Company Type' value={cType} onChange={(e) => setCompType(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={cType.length === 0} className="btn btn-primary">Add</button>
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
                                        <div className='icons'>
                                            <Link to={`/company-type/update/${item.ctypeid}`}><span><i className="fas fa-pencil-alt"></i></span></Link>
                                            <span className='text-primary ms-2' onClick={() => handleDelete(item.ctypeid)}><i className="fas fa-trash"></i></span>
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
