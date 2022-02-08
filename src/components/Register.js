import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const baseURL = "http://localhost/user/registeruser";

    const handleUserChange = (e) =>  setUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value)


    const submitForm = async (e) => {
        e.preventDefault();
        console.log(e)
        const payload = {
            "name":user,
            "password": password
        }
        console.log(payload)
        const res = await fetch(
            baseURL,
            {
                method:"POST",
                mode:"cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: payload
                }
            );
        console.log(await res.json())
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="user">User:</label>
            <input type="text" name="user" value={user} onChange={handleUserChange}/>
            
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={password} onChange={handlePasswordChange}/>
            
            <input type="submit" value="Submit"/>    
        </form>
    );
}


export default Register;