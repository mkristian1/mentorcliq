import axios from "axios";
import { FC, useEffect } from "react";
import { Button } from "react-bootstrap";
import api from "../../api";
import { useAppSelector } from "../../hooks/toolkit";
import { noAvatar } from "../../images";
import { addUser, fetchEmployess } from "../../reduxToolkit/slices/users";
import { useAppDispatch } from "../../store";
import styles from "./styles/index.module.scss";

const Employess: FC = () => {
  const { users } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployess())
  }, [])

  return (
    <div className="employess">
      {/* <button onClick={() => dispatch(addUser({ first_name: 'Ryu', last_name: 'ST' }))}>Add User</button> */}
      <ul className={styles['users__ul']}>
        {users.map((user: any) => {
          return (
            <li className={styles['users__li']} key={user.id}>
              <img className={styles['users__img']} src={noAvatar} alt={user.first_name} />
              <div className={styles['users__main-info']}>
                <p className="mb-0">{user.first_name} {user.last_name}</p>
                <p className="mb-0">{user.gender}</p>
              </div>
              <div className={styles['users__info']}>
                <p className={styles['users__p']}>Department: {user.department}</p>
                <p className={styles['users__p']}>Country: {user.country}</p>
                <p className={styles['users__p']}>City: {user.city}</p>
              </div>
              <Button variant="outline-warning">Match</Button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Employess;

