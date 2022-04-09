import cn from "classnames";
import { FC } from "react";
import Employess from "../../employees";
import style from '../styles/index.module.scss';


const ThirdStep: FC = () => {

    return (
        <div className={cn(style['third-step'], style['step'], 'shadow-sm p-5 rounded')}>
            <Employess />
        </div>
    )
}

export default ThirdStep;