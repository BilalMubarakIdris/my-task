import React, { useEffect, useState } from 'react'

function Register(){
    const [search, setSearch] = useState("");
    const [district, setDistrict] = useState("")
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [storeData, setStoreData] = useState([])
    const [filterData, setFilterData] = useState([]) 

    useEffect(() => {
        fetch('https://api.postalpincode.in/postoffice/New%20Delhi')
        .then(response => response.json())
        .then(data => {
            setStoreData(data[0].PostOffice)
            console.log(data)
        })
//530001
    },[])

    useEffect(() => {
        setFilterData(
            storeData.filter(value => value.Pincode.includes(search)).map(data => {
                return setCity(data.State)
            })
        )
    }, [search])

    useEffect(() => {
        setFilterData(
            storeData.filter(value => value.Pincode.includes(search)).map(data => {
                return setDistrict(data.District)
            })
        )
    }, [search])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    console.log(filterData)
    console.log(storeData)
    console.log(search)
    return(
        <div className="container">
            <form>
            <div className="form-input">
                    <div>
                    <label for="firstname">First Name</label>
                         <input type="text" 
                            name="fisrtname"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                    <label for="lastname">Last Name</label>
                        <input type="text" 
                            name="lastname"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                    <label for="email">Email</label>
                         <input type="email" 
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                    <label for="password">Password</label>
                         <input type="text" 
                            name="password"
                            value = {password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                    <label for="phoneNumber">Phone Number</label>
                        <input type="text" 
                            name="phoneNumber"
                            value={phoneNumber}
                            placeholder="Phone Number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                    <label for="address">Address</label>
                         <input type="text" 
                            name="address"
                            value={address}
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                    <label for="pincode">Pin Code</label>
                        <input type="text" 
                            name="pincode"
                            value={search}
                            placeholder="Pin Code"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-input">
                    <div>
                    <label for="city">City</label>
                        <input type="text" 
                            name="city"
                            value={city}
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    <label for="district">District</label>
                         <input type="text" 
                            name="district"
                            value={district}
                            placeholder="District"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="button">
                <button>Sign Up</button>
                </div>
            </form>
        </div>
    
    )
}



export default Register;