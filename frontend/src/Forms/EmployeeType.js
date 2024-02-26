import React, { useEffect, useState } from 'react'
import { Col, Form } from 'reactstrap'

export default function EmployeeType() {
    // const [emptypeid, setEmpTypeId] = useState();
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
            .then(() => alert("Employee Type Store Successfully!..."))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetch('http://localhost:8081/api/tmemptype')
            .then(res => res.json())
            .then(data => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Employee Type</h4>
                </div>
                <Form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        {/* <input className='form-control' type='text' placeholder='Employee Type Id' value={emptypeid} onChange={(e) => setEmpTypeId(e.target.value)} /> */}
                    </div>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Employee Type' value={empType} onChange={(e) => setEmpType(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <textarea className='form-control textarea' placeholder='Employee Description' value={empTypeDesc} onChange={(e) => setEmpTypeDesc(e.target.value)}></textarea>
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
