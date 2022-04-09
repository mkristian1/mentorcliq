import { useFormik } from "formik";
import { FC } from "react";
import { schemaRegistration } from "../../schema";
import FristStep from "./steps/firstStep";

const Registration: FC = () => {
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
        onSubmit: (data) => console.log(data),
        validationSchema: schemaRegistration,
    })

    return (
        <div>
            <FristStep formik={formik} />
        </div>
    )
}

export default Registration;