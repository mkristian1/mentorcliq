import cn from "classnames";
import { FC } from "react";
import Employess from "../../employees";
import { FormikProps } from 'formik';
import { IUsers } from "../../../types";
import style from '../styles/index.module.scss';

interface IThirdStep {
    formik: FormikProps<IUsers>,
}

const ThirdStep: FC<IThirdStep> = ({ formik }) => {

    return (
        <div className={cn(style['third-step'], style['step'], 'shadow-sm p-5 rounded')}>
            <Employess formik={formik} />
        </div>
    )
}

export default ThirdStep;