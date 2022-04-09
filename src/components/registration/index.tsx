import { useFormik } from "formik";
import { FC, useState } from "react";
import { STEPS_TYPE } from "../../const";
import { schemaRegistration } from "../../schema";
import { IUsers } from "../../types";
import FirstStep from "./steps/firstStep";
import SecondStep from "./steps/secondStep";
import ThirdStep from "./steps/thirdStep";


const Registration: FC = () => {
    const [step, setStep] = useState<number>(STEPS_TYPE.third);

    const handleSubmit = (data: IUsers) => {
        if (step === STEPS_TYPE.first) {
            setStep(STEPS_TYPE.second)
        }
        if (step === STEPS_TYPE.second) {
            setStep(STEPS_TYPE.third)
        }
        console.log(step);

    }

    const formik = useFormik({
        initialValues: {
            password: "",
            first_name: "",
            last_name: "",
            email: "",
            gender: "",
            department: "",
            job_title: "",
            country: "",
            city: ""
        },
        onSubmit: (data) => handleSubmit(data),
        validationSchema: schemaRegistration,
        validateOnChange: false,
        validateOnBlur: false,
    })

    return (
        <>
            {step === STEPS_TYPE.first && <FirstStep formik={formik} />}
            {step === STEPS_TYPE.second && <SecondStep formik={formik} />}
            {step === STEPS_TYPE.third && <ThirdStep />}
        </>
    )
}

export default Registration;