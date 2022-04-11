import cn from "classnames";
import { useMemo } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../const";
import { useAppSelector } from "../../../hooks/toolkit";
import styles from "./styles/index.module.scss";

const ProfilePageComponent = () => {
    const { currentUser, users } = useAppSelector(state => state.users)
    const employess = useMemo(() => users.filter((user: any) => currentUser.suggest.includes(user.id)), [currentUser.suggest])
    const navigate = useNavigate();
console.log(currentUser);

    return (
        <Container>
            <div className={cn('shadow-sm p-5 rounded')}>
                <h2>Profile</h2>
                <p className="mb-0">First Name: {currentUser.first_name}</p>
                <p className="mb-0">Last Name: {currentUser.last_name}</p>
                <p>Email: {currentUser.email}</p>
                <h3>Your suggestions</h3>
                <div className="mb-4">
                    {employess.map((employe) => {
                        return (
                            <div key={employe.id} className={styles['suggestions__item']}>
                                {employe.first_name} {employe.last_name}
                                {employe.id}
                            </div>
                        )
                    })}
                </div>
                <Button onClick={() => navigate(PATHS.suggestions)} className="text-white">Manage</Button>
            </div>
        </Container>
    );
}

export default ProfilePageComponent;
