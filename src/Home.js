import React,{useState} from 'react'

const Home = () =>    {
    const [name, setName] = useState("");
    const [input, setInput] = useState({
        firstName: "",
        lastName: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
                setInput((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit = () => {

            let newData = {...input};
        setName(newData);
            setInput({
                firstName:"",
                lastName:""
            })
    }
    
    return(
        <div>
            <form>
                <label>First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    value={input.firstName}
                    onChange={handleChange}
                    required="true"
                    />
                <br />
                <label>Last Name: </label>
                <input
                    type="text"
                    name="lastName"
                    value={input.lastName}
                    onChange={handleChange}
                    required="true"
                    />
                <br />
                <button onClick={()=>handleSubmit()}>Submit</button>
            </form>
            <p>{name.firstName} {" "} {name.lastName}</p>
        </div>
    )
}

export default Home