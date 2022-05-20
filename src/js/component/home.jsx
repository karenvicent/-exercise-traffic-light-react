import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [isRed, setRed] = useState(false);
	const [isYellow, setYellow] = useState(false);
	const [isGreen, setGreen] = useState(false);
	return (
		<div className="">
			<div className="soporte text-center mx-auto bg-dark"></div>
			<div className="caja bg-dark text-center mx-auto">
				<div>
					<button
						onClick={() => {
							setRed(true);
							setYellow(false);
							setGreen(false);
						}}
						className={`${
							isRed === true ? "bg-danger" : ""
						} rounded-circle`}></button>
				</div>
				<div className="">
					<button
						onClick={() => {
							setRed(false);
							setYellow(true);
							setGreen(false);
						}}
						className={`${
							isYellow === true ? "bg-warning" : ""
						} rounded-circle h-33`}></button>
				</div>
				<div>
					<button
						onClick={() => {
							setRed(false);
							setYellow(false);
							setGreen(true);
						}}
						className={`${
							isGreen === true ? "bg-success" : ""
						} rounded-circle h-33`}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;
