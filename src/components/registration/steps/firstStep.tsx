import cn from "classnames";
import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import style from '../styles/index.module.scss'


const FristStep: FC = () => {
    return (
        <div className={cn(style['first-step'], 'shadow-sm p-5 rounded')}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2 mt-4">
                    <Button className="text-white" variant="primary">Next</Button>
                </div>
            </Form>
        </div>
    )
}

export default FristStep;