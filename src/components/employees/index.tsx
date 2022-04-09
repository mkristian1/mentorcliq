import axios from "axios";
import { FC, useEffect } from "react";
import api from "../../api";
import { useAppSelector } from "../../hooks/toolkit";
import { addUser, fetchEmployess } from "../../reduxToolkit/slices/users";
import { useAppDispatch } from "../../store";

const Employess: FC = () => {
  const { users } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployess())
  }, [])

  return (
    <div className="employess">
      {/* <button onClick={() => dispatch(addUser({ first_name: 'Ryu', last_name: 'ST' }))}>Add User</button> */}
      <ul>
        {users.map((user: any) => {
          return (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Employess;

