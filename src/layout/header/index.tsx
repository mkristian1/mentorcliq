import { FC } from "react";
import { logo } from "../../images";
import styles from './styles/index.module.scss';

const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <img src={logo} />
        </header>
    )
}

export default Header;