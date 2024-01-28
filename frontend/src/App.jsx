import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
    const [emailInfo, setEmailInfo] = useState({
        to: "",
        subject: "",
        text: "",
    });

    const sendEmail = async () => {
        try {
            await axios.post("http://localhost:3001/send-email", emailInfo);
            console.log("Email sent successfully!");
        } catch (error) {
            console.error(
                "Error sending email:",
                error.response ? error.response.data : error.message
            );
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    return (
        <div>
            <h2>Email Sender</h2>
            <div>
                <label>To:</label>
                <input
                    type="email"
                    name="to"
                    value={emailInfo.to}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={emailInfo.subject}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Text:</label>
                <textarea
                    name="text"
                    value={emailInfo.text}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
}

export default App;
