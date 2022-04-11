import { FC } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../images";
import styles from './styles/index.module.scss';

const Header: FC = () => {
    return (
        <header className={styles['header']}>
            <Link to='/'><img className={styles['header--logo']} src={logo} /></Link>
        </header >
    )
}

export default Header;