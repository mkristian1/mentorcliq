import { FC } from "react";
import { logo } from "../../images";
import styles from './styles/index.module.scss';

const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <img className={styles['header--logo']} src={logo} />
        </header>
    )
}

export default Header;