import { useState, useEffect } from "react";
import LeftArrow from "../assets/LeftArrow.svg";
import Home from "../pages/Home";
import { gsap } from "gsap";

const OtpVerify = (props) => {
	const [auth, SetAuth] = useState(false);
	const HandleAuth = () => {
		SetAuth(true);
	};
	useEffect(() => {
		if (auth) {
			gsap.fromTo(
				".animate-slide-in-left",
				{ x: -200, opacity: 0 },
				{ x: 0, opacity: 1, duration: 1 }
			);
		}
	}, [auth]);
	return (
		<div>
			{!auth && (
				<div>
					<img
						src={LeftArrow}
						alt="Left Arrow"
						className="w-[35px] mt-5 ml-4 border border-gray-300 rounded-[8px]"
						onClick={() => props.setShowOTP(false)}
					/>
					<div className="flex pl-4 justify-center flex-col min-h-screen max-w-[330px]">
						<h1 className="font-urbanist text-[26px] font-bold leading-[33.8px] tracking-[-0.01em] text-left underline-offset-auto decoration-skip-ink-none">
							OTP Verification
						</h1>
						<p className="font-[16px] leading-[24px] text-gray-400 pt-2">
							Enter the verification code we just sent on your Mobile Number.
						</p>

						<div className="flex justify-between mt-[20px]">
							{[...Array(6)].map((_, index) => (
								<input
									key={index}
									type="text"
									maxLength="1"
									className="w-[48px] h-[56px] border-[1px] border-solid border-gray rounded-[8px] text-center font-[16px] leading-[24px] text-gray bg-[#F7F8F9]"
								/>
							))}
						</div>
						<button
							className="w-[330px] h-[56px] mt-[20px] rounded-[8px] bg-[#FF6D6A] text-white"
							onClick={HandleAuth}
						>
							Verify
						</button>
						<p className="text-center mt-2">
							Didn&apos;t received code?{" "}
							<span className="text-blue-600">Resend</span>
						</p>
					</div>{" "}
				</div>
			)}

			{auth && (
				<div className="animate-slide-in-left">
					<Home />
				</div>
			)}
		</div>
	);
};

export default OtpVerify;
