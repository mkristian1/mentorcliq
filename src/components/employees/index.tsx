import { FC, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../hooks/toolkit";
import { noAvatar } from "../../images";
import { addSuggest, fetchEmployess, setCurrentUser } from "../../reduxToolkit/slices/users";
import { useAppDispatch } from "../../store";
import { IUsers } from "../../types";
import { FormikProps } from 'formik';
import { getArrId, getSuggestStatusUsers } from "../../utils";
import SelectedSuggestions from "./selectedSuggestions";
import styles from "./styles/index.module.scss";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../const";

interface IEmployess {
  formik?: FormikProps<IUsers>,
}

const Employess: FC<IEmployess> = ({ formik }) => {
  const { users, currentUser } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();
  const suggestUsers = useMemo(() => getSuggestStatusUsers(users), [users])
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchEmployess())
  }, [])

  const handleAddSuggest = (id: number) => {
    return () => {
      dispatch(addSuggest(id))
    }
  }

  const handleCreateUser = async () => {
    try {
      if (formik) {
        await api.createUser({ ...formik.values, suggest: getArrId(suggestUsers) })
        const [user] = await api.getUser({ email: formik.values.email, password: formik.values.password })
        dispatch(setCurrentUser(user))
        navigate(PATHS.profile)
      }
    } catch (e) {
      console.log(e);

    }
  }
  const handleUpdateUser = async () => {
    try {
      const user = await api.updateUser(currentUser.id, { ...currentUser, suggest: getArrId(suggestUsers) })
      dispatch(setCurrentUser(user))
      navigate(PATHS.profile)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="employess">
      <SelectedSuggestions suggestUsers={suggestUsers} />
      <div className="d-grid gap-2 mb-4">
        <Button
          onClick={formik ? handleCreateUser : handleUpdateUser}
          disabled={suggestUsers.length < 1}
          variant="primary"
          className="text-white"
        >
          Confirm
        </Button>
      </div>
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

