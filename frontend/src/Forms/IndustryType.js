import React from 'react'
import { Col, Form, Input } from 'reactstrap'

export default function IndustryType() {
    return (
        <>
            <Col lg={4}>
                <div className='mb-4'>
                    <h4>Industry Type</h4>
                </div>
                <Form>
                    <div className='mb-4'>
                        <Input type='hidden' placeholder='Industry Type Id' />
                    </div>
                    <div className='mb-4'>
                        <input className='form-control' placeholder='Industry Type' />
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