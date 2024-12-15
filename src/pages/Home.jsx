import { useState } from "react";
import Details from "../pages/Details";
import { useEffect } from "react";
import { gsap } from "gsap";

const Home = () => {
	const [showDetails, setShowDetails] = useState(false);
	const HandleShowDetails = () => {
		setShowDetails(true);
	};
	useEffect(() => {
		if (showDetails) {
			gsap.fromTo(
				".animate-slide-in-left",
				{ x: -200, opacity: 0 },
				{ x: 0, opacity: 1, duration: 1 }
			);
		}
	}, [showDetails]);
	return (
		<div className="min-h-screen">
			{!showDetails && (
				<div className="animate-slide-in-left">
					{/* Header */}
					<header className="bg-white shadow-md p-4 mb-6">
						<span className="flex items-center text-gray-600 font-bold">
							Pre Order From &nbsp;{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="black"
								width="16"
								height="16"
							>
								<path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20.8284 21.0711L18 24L15.1716 21.0711C13.6095 19.4535 13.6095 16.8308 15.1716 15.2132C16.7337 13.5956 19.2663 13.5956 20.8284 15.2132C22.3905 16.8308 22.3905 19.4535 20.8284 21.0711ZM19.3897 19.6818C20.2034 18.8392 20.2034 17.4451 19.3897 16.6025C18.614 15.7992 17.386 15.7992 16.6103 16.6025C15.7966 17.4451 15.7966 18.8392 16.6103 19.6818L18 21.1209L19.3897 19.6818Z"></path>
							</svg>
						</span>
						<p className="font-bold text-xl">Connaught Place</p>
					</header>
					{/* User */}
					<div className="flex justify-around items-center">
						<div className="bg-gray-200 -top-[20px] p-5 max-w-[180px] rounded-br-2xl rounded-bl-2xl">
							<h1 className="font-bold text-3xl text-gray-600">Karan</h1>{" "}
							<p>Let&apos;s explore this evening</p>
						</div>
						<div className="flex gap-6">
							<div className="">
								<div className="bg-[#FF6D6A] p-3 max-w-[60px] rounded-[8px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="36"
										height="36"
										fill="white"
									>
										<path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path>
									</svg>
								</div>
								<p className="text-gray-500 font-semibold text-center">
									Offers
								</p>
							</div>
							<div className="">
								<div className="bg-[#468acd] p-3 max-w-[60px] rounded-[8px]">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="36"
										height="36"
										fill="white"
									>
										<path d="M2.00488 8.99979H21.0049C21.5572 8.99979 22.0049 9.4475 22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V8.99979ZM3.00488 2.99979H18.0049V6.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM15.0049 13.9998V15.9998H18.0049V13.9998H15.0049Z"></path>
									</svg>
								</div>
								<p className="text-gray-500 font-semibold text-center">
									Wallet
								</p>
							</div>
						</div>
					</div>
					{/* Taste Section */}

					<div>
						<div className="flex justify-between m-3">
							<h2 className="font-bold text-2xl text-gray-600">Your Taste</h2>
							<p className="right-2 flex gap-2 items-center">
								see all{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="gray"
									className="w-[25px] h-[25px] inline-block rounded-full bg-gray-200"
								>
									<path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path>
								</svg>
							</p>
						</div>
						<div className="flex p-3 gap-4">
							<div className="bg-gray-200 rounded-xl max-w-[130px]">
								<img
									src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Biryani"
									className="w-full h-32 object-cover rounded-lg mb-2"
								/>
								<h1 className="font-bold text-xl text-gray-700 text-center">
									Biryani
								</h1>
							</div>
							<div className="bg-gray-200 rounded-xl max-w-[130px]">
								<img
									src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Biryani"
									className="w-full h-32 object-cover rounded-lg mb-2"
								/>
								<h1 className="font-bold text-xl text-gray-700 text-center">
									Biryani
								</h1>
							</div>
							<div className="bg-gray-200 rounded-xl max-w-[130px]">
								<img
									src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Biryani"
									className="w-full h-32 object-cover rounded-lg mb-2"
								/>
								<h1 className="font-bold text-xl text-gray-700 text-center">
									Biryani
								</h1>
							</div>
							<div className="bg-gray-200 rounded-xl max-w-[130px]">
								<img
									src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Biryani"
									className="w-full h-32 object-cover rounded-lg mb-2"
								/>
								<h1 className="font-bold text-xl text-gray-700 text-center">
									Biryani
								</h1>
							</div>
						</div>
					</div>

					{/* Slider */}

					<div className="relative w-full">
						<div className="overflow-hidden">
							<div className="flex transition-transform duration-500">
								<img
									src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
									alt="Food 1"
									className="w-full h-48 object-cover p-5"
								/>
							</div>
						</div>
						<div className=" bottom-4 left-0 right-0 flex justify-center gap-2">
							<button className="w-2 h-2 rounded-full bg-black opacity-50"></button>
							<button className="w-2 h-2 rounded-full bg-black"></button>
							<button className="w-2 h-2 rounded-full bg-black opacity-50"></button>
						</div>
					</div>

					{/* Cards */}
					<div className="m-3">
						<h2 className="font-bold text-2xl text-gray-600">Popular Ones</h2>
						<div>
							{/* Card 1 */}
							<div className="flex gap-2 p-2" onClick={HandleShowDetails}>
								<img
									src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
									alt="Food 1"
									className=" w-40 h-40 rounded-md"
								/>
								<div className="flex flex-col">
									<h2 className="font-bold">Lazy Bear</h2>
									<p className="opacity-50">
										Cakes, Pastry, Pastas <br /> Connaught Place, New Delhi
									</p>
									<p className="text-orange-700 inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="12"
											height="12"
											fill="currentColor"
										>
											<path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path>
										</svg>
										<span>4 Offers trending</span>
									</p>
									<div className="flex justify-between">
										<p>
											<span className="font-bold">4.5</span>
											<br /> <span className="opacity-50">Popularity</span>
										</p>
										<p>
											<span className="font-bold">$ 200</span>
											<br /> <span className="opacity-50">Cost for two</span>
										</p>
									</div>
								</div>
							</div>
							{/* Card 2 */}
							<div className="flex gap-2 p-2" onClick={HandleShowDetails}>
								<img
									src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
									alt="Food 1"
									className=" w-40 h-40 rounded-md"
								/>
								<div className="flex flex-col">
									<h2 className="font-bold">Lazy Bear</h2>
									<p className="opacity-50">
										Cakes, Pastry, Pastas <br /> Connaught Place, New Delhi
									</p>
									<p className="text-orange-700 inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="12"
											height="12"
											fill="currentColor"
										>
											<path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path>
										</svg>
										<span>4 Offers trending</span>
									</p>
									<div className="flex justify-between">
										<p>
											<span className="font-bold">4.5</span>
											<br /> <span className="opacity-50">Popularity</span>
										</p>
										<p>
											<span className="font-bold">$ 200</span>
											<br /> <span className="opacity-50">Cost for two</span>
										</p>
									</div>
								</div>
							</div>
							{/* Card 3 */}
							<div className="flex gap-2 p-2" onClick={HandleShowDetails}>
								<img
									src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
									alt="Food 1"
									className=" w-40 h-40 rounded-md"
								/>
								<div className="flex flex-col">
									<h2 className="font-bold">Lazy Bear</h2>
									<p className="opacity-50">
										Cakes, Pastry, Pastas <br /> Connaught Place, New Delhi
									</p>
									<p className="text-orange-700 inline-flex items-center gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="12"
											height="12"
											fill="currentColor"
										>
											<path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path>
										</svg>
										<span>4 Offers trending</span>
									</p>
									<div className="flex justify-between">
										<p>
											<span className="font-bold">4.5</span>
											<br /> <span className="opacity-50">Popularity</span>
										</p>
										<p>
											<span className="font-bold">$ 200</span>
											<br /> <span className="opacity-50">Cost for two</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{showDetails && (
				<div className="animate-slide-in-left">
					<Details setShowDetails={setShowDetails} />
				</div>
			)}
		</div>
	);
};

export default Home;
