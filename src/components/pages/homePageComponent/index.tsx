import { FC } from "@testing-library/react/node_modules/@types/react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Auth from "../../auth";
import Registration from "../../registration";
import styles from './styles/index.module.scss';

const HomePageComponent: FC = () => {
    const [isRegistration, setIsRegistration] = useState<boolean>(true)
    return (
        <Container>
            <div className={styles['wrap']}>
                <h2>{isRegistration ? 'Registration' : 'Authorization'}</h2>
                <Form.Check
                    type="switch"
                    onChange={() => setIsRegistration((prevState) => !prevState)}
                />
            </div>
            {isRegistration ? <Registration /> : <Auth />}
        </Container>
    );
}

export default HomePageComponent;