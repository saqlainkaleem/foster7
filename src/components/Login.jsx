import { useEffect } from "react";
import OtpVerify from "./OtpVerify";
import { gsap } from "gsap";

const Login = (props) => {
	useEffect(() => {
		if (props.showOTP) {
			gsap.fromTo(
				".animate-slide-in-left",
				{ x: -200, opacity: 0 },
				{ x: 0, opacity: 1, duration: 1 }
			);
		}
	}, [props.showOTP]);
	return (
		<div>
			{!props.showOTP && (
				<div className="flex items-center justify-center flex-col min-h-screen">
					<h1 className="font-urbanist text-[26px] font-bold leading-[33.8px] tracking-[-0.01em] text-left underline-offset-auto decoration-skip-ink-none">
						Enter Your Mobile Number
					</h1>
					<p className="font-[16px] leading-[24px] text-gray-400 pt-2">
						We will send you the 4 digit verification code
					</p>
					<input
						type="text"
						className="w-[330px] h-[56px] border-[1px] border-solid border-gray rounded-[8px] mt-[20px] px-[20px] py-[15px] font-[16px] leading-[24px] text-gray"
						placeholder="Enter your mobile number"
					/>

					<button
						className="w-[330px] h-[56px] mt-[20px] rounded-[8px] bg-[#FF6D6A] text-white"
						onClick={props.handleSendCode}
					>
						Send Code
					</button>
				</div>
			)}
			{props.showOTP && (
				<div className="animate-slide-in-left">
					<OtpVerify setShowOTP={props.setShowOTP} />
				</div>
			)}
		</div>
	);
};

export default Login;
