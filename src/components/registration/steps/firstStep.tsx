import cn from "classnames";
import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import style from '../styles/index.module.scss'
import { FormikProps } from 'formik';
import { IUsers } from "../../../types";


interface IFristStep {
    formik: FormikProps<IUsers>,
}


const FristStep: FC<IFristStep> = ({ formik }) => {
    const { submitForm, values, errors, handleChange, isValid } = formik;

    return (
        <div className={cn(style['first-step'], 'shadow-sm p-5 rounded')}>
            <Form validated={!isValid}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                    <Button onClick={submitForm} className="text-white" variant="primary">Next</Button>
                </div>
            </Form>
        </div>
    )
}

export default FristStep;