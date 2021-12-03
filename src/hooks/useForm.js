// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setShowSuccessMessage(true)
    }
    return [values, handleChange, handleSubmit, showSuccessMessage]
}

export default useForm;