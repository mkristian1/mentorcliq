import { FC } from "react";
import { useAppSelector } from "../../hooks/toolkit";
import { addUser } from "../../reduxToolkit/slices/users";
import { useAppDispatch } from "../../store";

const Employess = () => {
  const { users } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();
  console.log(users);

  return (
    <div className="App">
      <button onClick={() => dispatch(addUser({ firstName: 'Ryu', lastName: 'ST' }))}>Add User</button>
      <ul>
        {users.map((user: any) => {
          return (
            <li key={user.firstName}>{user.firstName} {user.lastName}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Employess;

