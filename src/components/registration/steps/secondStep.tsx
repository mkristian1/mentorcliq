import cn from "classnames";
import { FC } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import style from '../styles/index.module.scss'
import { FormikProps } from 'formik';
import { IUsers } from "../../../types";


interface ISecondStep {
    formik: FormikProps<IUsers>,
}


const SecondStep: FC<ISecondStep> = ({ formik }) => {
    const { submitForm, handleChange, isValid } = formik;

    return (
        <div className={cn(style['second-step'], style['step'], 'shadow-sm p-5 rounded')}>
            <Form validated={!isValid}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="first_name"
                                type="text"
                                placeholder="Enter first name"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="last_name"
                                type="text"
                                placeholder="Enter last name"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Select country</Form.Label>
                            <Form.Select >
                                <option>Armenia</option>
                                <option>USA</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Select city</Form.Label>
                            <Form.Select>
                                <option>Yerevan</option>
                                <option>Dilijan</option>
                                <option>Gyumri</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Select>
                                <option>Marketing</option>
                                <option>Support</option>
                                <option>Product Management</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Job title</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="job_title"
                                type="text"
                                placeholder="Enter last name"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className="d-grid gap-2 mt-4">
                    <Button onClick={submitForm} className="text-white" variant="primary">Next</Button>
                </div>
            </Form>
        </div>
    )
}

export default SecondStep;