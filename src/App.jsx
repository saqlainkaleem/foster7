import { useState } from "react";
import Login from "./components/Login";

function App() {
	const [showOTP, setShowOTP] = useState(false);

	const handleSendCode = () => {
		setShowOTP(true);
	};
	return (
		<>
			<Login
				handleSendCode={handleSendCode}
				showOTP={showOTP}
				setShowOTP={setShowOTP}
			/>
		</>
	);
}

export default App;
