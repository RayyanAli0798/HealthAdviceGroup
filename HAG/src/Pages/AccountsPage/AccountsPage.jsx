import "./AccountsPage.css"
import PagesHeader from "../../Components/PagesHeader/PagesHeader"
import PagesHeaderForMobile from "../../Components/PagesHeaderForMobile/PagesHeaderForMobile"
import { Link } from "react-router"
import { useState } from "react"
import axios from "axios"
import { useUser } from "../../Contexts/UserContexts"
import { useNavigate } from "react-router";

export default function AccountsPage() {
    const [register, setRegister] = useState(true)
    const SetLoggedIn = useUser();

    function toggleForm() {
        setRegister(!register)
    }
    return (
        <>
            <PagesHeader />
            <PagesHeaderForMobile />


            {register ? <SignUp toggle={toggleForm} /> : <SignIn toggle={toggleForm} />}

        </>
    )
}


function SignUp({ toggle }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMSG, setErrorMSG] = useState("")

    const { SetLoggedIn } = useUser();
    const navigate = useNavigate();


    function SigningUp(event) {
        //stops page from refreshing after submission
        event.preventDefault()
        setErrorMSG("")

        let signUpData = {
            email,
            password,
            "confirm_password": confirmPassword
        }

        const url = "http://127.0.0.1:8001/authentication/register"
        function handlingError(err) {
            setErrorMSG(
                err.response?.data?.detail || "Something went wrong"
            );
        }
        function handlingSuccess(res) {
            SetLoggedIn(true)
            navigate("/")
        }

        axios.post(url, signUpData)
            .then(handlingSuccess)
            .catch(handlingError)
    }


    // Signup forms
    return (

        <div className="AccountsBoxContainer">
            <div className="AccountsPageBackgroundBox">
                <h3 className="AccountPageTitle"> Join Health Advice Group </h3>
                <form onSubmit={SigningUp}>
                    <label> Email: <input type="email" className="AuthenticationInputBox" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />  </label>

                    <label> Password: <input type="password" className="AuthenticationInputBox" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></label>


                    <label> Re-enter Password: <input type="password" className="AuthenticationInputBox" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} /> </label>

                    <label><input type="checkbox" required /> <p className="CheckboxText"> Do you agree to the <Link to="/TNC"> terms and conditions?</Link> </p></label>
                    <button className="SubmissionBtn" type="submit"> Register </button>
                </form>
                {errorMSG ? <p className="ErrorMSG"> Error: {errorMSG} </p> : null}
                <span className="Switching"> <p> Already have an account? <button className="SwitchingBTN" onClick={toggle}> Sign In! </button></p> </span>

            </div> </div>
    )
}

function SignIn({ toggle }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMSG, setErrorMSG] = useState("")
    
    const { SetLoggedIn } = useUser();
    const navigate = useNavigate();

    function SigningUp(event) {
        //stops page from refreshing after submission
        event.preventDefault()
        setErrorMSG("")

        let signInData = {
            email,
            password
        }

        function handleSuccess(res) {
            SetLoggedIn(true)
            navigate("/")
        }
        function handleError(err) {
            setErrorMSG(
                err.response?.data?.detail || "Something went wrong"
            );
        }

        const url = "http://127.0.0.1:8001/authentication/login"

        axios.post(url, signInData)
            .then(handleSuccess)
            .catch(handleError)

    }
    // Signin function
    return (
        <div className="AccountsBoxContainer">
            <div className="AccountsPageBackgroundBox">
                <h3 className="AccountPageTitle"> Welcome Back! </h3>
                <form onSubmit={SigningUp}>
                    <label>Email: <input type="email" className="AuthenticationInputBox" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /></label>

                    <label> Password:<input type="password" className="AuthenticationInputBox" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /></label>

                    <button type="submit" className="SubmissionBtn"> Log in </button>
                </form>
                {errorMSG ? <p className="ErrorMSG"> Error: {errorMSG} </p> : null}
                <span className="Switching">  <p>Dont have an account? <button className="SwitchingBTN" onClick={toggle}> Sign Up! </button></p> </span>
            </div>
        </div>
    )
}

