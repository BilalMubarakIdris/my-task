import React, {useState} from "react"
import './login.css'

function Login() {
    const [inputData, setInputData] = useState({email: "", password: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
        // update our inputData state
        const {name, value} = event.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContactData => {
            return [
                ...prevContactData,
                inputData
            ]
        })
    }
    
    const data = contactsData.map(contact => {
        return <h3>{contact.email} {contact.password}</h3>
    })
    console.log(data)
    return (
        <>
            <div className="form-input">
                <form onSubmit={handleSubmit} className="my-form">
                    <div className="section">
                        <label for="lastname">Last Name</label>
                        <input type="email"
                            placeholder="Email"
                            name="email" 
                            value={inputData.email}
                            onChange={handleChange}
                        />
                    </div>
                        <a href="#">Forgot Password?</a>
                    <div className="section">
                    <label for="lastname">Last Name</label>
                        <input type="password"
                            placeholder="Password"
                            name="password" 
                            value={inputData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button">
                <button>Add contact</button>
                </div>
            </form>
            {data}
        </div>
        </>
    )
}

export default Login