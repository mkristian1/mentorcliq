import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "./hooks/toolkit";
import { addUser } from "./reduxToolkit/slices/users";

const App = () => {
  const { users } = useAppSelector(state => state.users)
  const dispatch = useDispatch();
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

export default App;
