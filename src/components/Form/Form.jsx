//===========
//  Imports
//===========
// Imports React's useState method.
import { useState } from 'react';
// Imports component(s).
import Modal from '../Modal/Modal';

//===================
//  Global Variables
//===================
// Regex for email validation.
const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

//=============
//  Functions
//=============
// Creates a form.
const Form = () => {
    // UseState initialises formData state as an object (containing fullName, email and message keys, with their values set to empty strings; plus key for web3form API) and the setFormData function (which will be used to update the state).
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
        access_key: "604a6c37-efa6-410c-9348-e5542506f47c"
    });

    // UseState intialises result state (set to false) and the setResult function.
    const [result, setResult] = useState("");

    // Function to handle change to input fields; takes in event parameter.
    const handleInputChange = (event) => {
        // Extracts the value entered in the input field that triggered the event (i.e. the user's input).
        let value = event.target.value;
        //Extracts the name attribute of the input field that triggered the event (i.e. fullName, email or message).
        const name = event.target.name;
        // Updates the formData state by spreading the existing state (...formData) and updates the specific field that triggered the event ([name]: value) (e.g. message: "Hello").
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle click event on submit button; takes in event parameter.
    const handleFormSubmit = async (event) => {
        // Prevents the default form submission behaviour.
        event.preventDefault();

        // Form validation (and then updates result state accordingly, which sets text of modal).
        if (!formData.fullName && !formData.email && !formData.message) {
            setResult("Please complete the Form.");
        } else if (formData.fullName.length < 3) {
            setResult("Please enter your full name.");
        } else if (!formData.email || !regex.test(formData.email)) {
            setResult("Please enter your email address.");
        } else if (!formData.message) {
            setResult("Please enter a message for Code Em.");
        } else {

            // Updates result state (which sets text of modal), while waiting for fetch function on API to finish.
            setResult("Sending....");

            // API call to web3forms
            // *CREDIT: Code adapted and trouble-shot using Web3Forms Documentation (no date) Simple React Contact Form (https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form) and Troubleshooting (https://docs.web3forms.com/getting-started/troubleshooting#cors-error).
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then((res) => res.json());

            // If API returns successfully, logs success message, updates result state (setting text of modal) and formData state (resetting input fields to empty strings).
            if (res.success) {
                console.log("Success", res);
                setResult(res.message);
                setFormData({
                    ...formData,
                    fullName: "",
                    email: "",
                    message: ""
                });
                // If API does NOT return successfully, logs error message and update result state.
            } else {
                console.log("Error", res);
                setResult(res.message);
            }
        }
    };

    // Returns Form and Modal JSX.
    return (
        <>
            <form className="col-lg-4">
                <input
                    type="name"
                    className="form-control mb-3"
                    id="fullName"
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    placeholder="Enter your full name" />
                <input
                    type="email"
                    className="form-control mb-3"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Enter your email address" />
                <textarea
                    type="message"
                    className="form-control mb-3"
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Add your message for Code Em" />
                <button className="btn m-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modal"
                    onClick={handleFormSubmit}>Submit</button>
            </form>
            <Modal
                title="Contact Form"
                text={result} />
        </>
    )
};

//===========
//  Exports
//===========
// Exports component.
export default Form;