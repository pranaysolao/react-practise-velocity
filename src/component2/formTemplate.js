export function FormTemplate(prop){
    return(
        <div className="container-fluid">
            <form>
                <h2 className="bi bi-person-fill">UserCreadential</h2>
                <dl>
                    <dt>{prop.name}</dt>
                    <input type="text" placeholder={prop.name} />
                    <dt>Password</dt>
                    <input type="text" placeholder="Enter the password" />

                </dl>
                <button>{prop.button}</button>
            </form>

        </div>
    )
}