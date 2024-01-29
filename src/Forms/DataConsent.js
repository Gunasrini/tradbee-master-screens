import React from 'react'
import { Col, Form, Input } from 'reactstrap'

export default function DataConsent() {
    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Data Consent</h4>
                </div>
                <Form>
                    <div className='mb-4'>
                        <Input type='hidden' placeholder='Data Consent Id' />
                    </div>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Data Consent' />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">Add</button>
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
                        <tr>
                            <td>Type 1</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            <td>
                                <div className="icons">
                                    <i className="fas fa-eye"></i>
                                    <i className="fas fa-pencil-alt"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Type 2</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            <td>
                                <div className="icons">
                                    <i className="fas fa-eye"></i>
                                    <i className="fas fa-pencil-alt"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Type 3</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            <td>
                                <div className="icons">
                                    <i className="fas fa-eye"></i>
                                    <i className="fas fa-pencil-alt"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
