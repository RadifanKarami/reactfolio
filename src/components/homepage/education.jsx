import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Your University</div>
							<div className="work-subtitle">
								Your Degree
							</div>
							<div className="work-duration">Year - Year</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
