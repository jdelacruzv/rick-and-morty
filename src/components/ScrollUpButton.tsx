import { FcExternal } from "react-icons/fc";
import { useState } from "react";
import style from "./ScrollUpButton.module.css";

const ScrollUpButton = () => {
	const [showBtnUp, setShowBtnUp] = useState(false);

	window.addEventListener("scroll", () => {
		window.scrollY > 300 ? setShowBtnUp(true) : setShowBtnUp(false);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{showBtnUp && (
				<FcExternal
					className={style.icon__up}
					onClick={scrollToTop}
				/>
			)}
		</>
	);
};

export default ScrollUpButton;
