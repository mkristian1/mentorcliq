import { FC, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../hooks/toolkit";
import { noAvatar } from "../../images";
import { addSuggest, fetchEmployess } from "../../reduxToolkit/slices/users";
import { useAppDispatch } from "../../store";
import { getSuggestStatusUsers } from "../../utils";
import SelectedSuggestions from "./selectedSuggestions";
import styles from "./styles/index.module.scss";

const Employess: FC = () => {
  const { users } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();
  const suggestUsers = useMemo(() => getSuggestStatusUsers(users), [users])

  useEffect(() => {
    dispatch(fetchEmployess())
  }, [])

  const handleAddSuggest = (id: number) => {
    return () => {
      dispatch(addSuggest(id))
    }
  }

  return (
    <div className="employess">
      <SelectedSuggestions suggestUsers={suggestUsers} />
      <h2>Employees</h2>
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
              <Button
                disabled={user.suggest || suggestUsers.length >= 5}
                onClick={handleAddSuggest(user.id)}
                variant="warning"
              >
                {user.suggest ? 'Added' : 'Add'}
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Employess;

