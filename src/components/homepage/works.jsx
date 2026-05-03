import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<a
							href="https://bsn.go.id/"
							target="_blank"
							rel="noreferrer"
							className="work"
						>
							<img
								src="./bsn.png"
								alt="bsn"
								className="work-image"
							/>
							<div className="work-title">Badan Standardisasi Nasional</div>
							<div className="work-subtitle">
								IT Support Specialist
							</div>
							<div className="work-duration">2022 - 2024</div>
						</a>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
