import { FC } from "react";
import { Badge, CloseButton } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/toolkit";
import { removeSuggest } from "../../../reduxToolkit/slices/users";
import { IUsers } from "../../../types";
import styles from './styles/index.module.scss'

interface ISelectedSuggestions {
    suggestUsers: IUsers[],
}

const SelectedSuggestions: FC<ISelectedSuggestions> = ({ suggestUsers }) => {
    const dispatch = useAppDispatch()

    const handleRemoveSuggest = (id: number) => {
        return () => {
            dispatch(removeSuggest(id))
        }
    }

    return (
        <div className="mb-3">
            <h2 className="mb-4">Your suggestions <Badge bg="secondary">{suggestUsers.length} / 5</Badge> </h2>
            <div className={styles['suggestions']}>
                {!suggestUsers.length &&
                    <div className={styles['suggestions__item']}>
                        Empty
                    </div>
                }
                {suggestUsers.map(user => {
                    return (
                        <div key={user.id} className={styles['suggestions__item']}>
                            {user.first_name} {user.last_name}
                            {user.id && <CloseButton onClick={handleRemoveSuggest(user.id)} />}
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default SelectedSuggestions;