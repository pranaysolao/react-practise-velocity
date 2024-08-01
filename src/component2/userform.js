import { useState } from "react"

export function Demo5() {

    const [user, setUser] = useState([])
    const [formval, setFormval] = useState({ Username: "", Email: "", Mobile: "", Address: "" })

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        formval[e.target.name] = e.target.value
        setFormval({ ...formval })
        // console.log(formval)

    }

    function handlesubmit(e) {
        e.preventDefault()
        user.push({
            Username: formval.Username,
            Email: formval.Email,
            Mobile: formval.Mobile,
            Address: formval.Address
        })

        setUser([...user])
        console.log(user)
    }

    return (
        <div className="container-fluid">
            <form onSubmit={handlesubmit}>
                <dl>
                    <dt>Name:</dt>
                    <dd><input name="Username" value={formval.Username} type="text" onChange={handleInputChange} placeholder="Enter the nane" /></dd>
                    <dt>Email:</dt>
                    <dd><input name="Email" value={formval.Email} type="text" onChange={handleInputChange} placeholder="Enter the Email" /></dd>
                    <dt>Mobile:</dt>
                    <dd><input name="Mobile" value={formval.Mobile} type="text" onChange={handleInputChange} placeholder="Enter the Mobile" /></dd>
                    <dt>Address:</dt>
                    <dd><input name="Address" value={formval.Address} type="text" onChange={handleInputChange} placeholder="Enter the address" /></dd>

                </dl>
                <button>Submit</button>
            </form>


        </div>
    )
}


