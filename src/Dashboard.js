import { useState } from "react"

function Dashboard() {
    const [isLogin, setLogin] = useState(false) //array destructure
    const [msg, setMsg] = useState('Hello')
    //state value, set state
    // 

    //isLogin = false
    //function setLogin(abc) {
    //    isLogin  = abc
    //}


    function handleChange() {
        if (isLogin === true) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    //conditional rendering
    return (
        <div>
            {isLogin === true ? <div>
                <h1>Welcome Rohit</h1>
                <button onClick={handleChange}>Change State</button>

            </div> : <div>
                <h1>Welcome Guest</h1>
                <button onClick={handleChange}>Change State</button>
            </div>}
        </div>

    )

    // if(isLogin==true){
    //     return (
    //         <div>
    //             <h1>Welcome Rohit</h1>
    //             <button onClick={handleChange}>Change State</button>
    //         </div>

    //     )
    // }else{
    //     return (
    //         <div>
    //             <h1>Welcome Guest</h1>
    //             <button onClick={handleChange}>Change State</button>
    //         </div>

    //     )
    // }

}
export default Dashboard

