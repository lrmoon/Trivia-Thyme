import React from "react";
import "./LandingPage.css";
function LandingPage() {
	const ref = React.useRef();
	const handleClick = () => {
		const stemRef = ref.current;
		stemRef.classList.add("rain");
		setTimeout(() => {
			stemRef.classList.remove("rain");
		}, 3000);
	};
	return (
		<div className="page-container">
			<h1 className="title">Trivia Thyme</h1>

			<p className="subtitle">
				Answer questions correctly to water your thyme and make them grow. Wrong
				answers shrink your thyme! The first player to finish growing their
				thyme, wins!{" "}
			</p>
			<div className="buttons">
				<button>Solo</button>
				<button>Two Player</button>
			</div>

			<div className="drop" onClick={handleClick}></div>

			<div className="box">
				<div className="stem" ref={ref}>
					<div className="leaf leaf01">
						<div className="line"></div>
					</div>
					<div className="leaf leaf02">
						<div className="line"></div>
					</div>
					<div className="leaf leaf03">
						<div className="line"></div>
					</div>
					<div className="leaf leaf04">
						<div className="line"></div>
					</div>
					<div className="leaf leaf05">
						<div className="line"></div>
					</div>
					<div className="leaf leaf06">
						<div className="line"></div>
					</div>
				</div>
				<div className="pot"></div>
				<div className="pot-top"></div>
			</div>
		</div>
	);
}

export default LandingPage;
