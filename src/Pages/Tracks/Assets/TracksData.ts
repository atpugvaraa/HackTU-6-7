import aiPoweredLending from "./aiPoweredLending.png";
import digitalFrontier from "./digitalFrontier.png";
import ecoCity from "./ecoCity.png";
import health from "./health.png";
import learnSphere from "./learnSphere.png";
import openSus from "./openSustainaibility.png";

export type TrackDataTypes = {
	imageSrc: string;
	title: string;
	subTitle: string;
	description: string;
};

export const data: TrackDataTypes[] = [
	{
	 	imageSrc: openSus,
	 	title: "Climate Action",
	 	subTitle: "",
	 	description:
	 		"Initiatives and projects aimed at combating climate change and promoting environmental sustainability.",
	},
	{
		imageSrc: ecoCity,
		title: "Partnering for the Goals",
		subTitle: "",
		description:
			"Collaborative efforts and partnerships to achieve the United Nations Sustainable Development Goals (SDGs).",
	},
	{
		imageSrc: health,
		title: "Good Health and Well-being",
		subTitle: "",
		description:
			"Projects focused on improving health outcomes, healthcare access, and overall well-being.",
	},
	{
		imageSrc: learnSphere,
		title: "Life below Water",
		subTitle: "",
		description:
			"Conservation and sustainable use of oceans, seas, and marine resources for sustainable development.",
	},
	{
		imageSrc: digitalFrontier,
		title: "Responsible Consumption and Production",
		subTitle: "",
		description:
			"Promoting sustainable consumption and production patterns to reduce environmental impact.",
	},
	{
		imageSrc: aiPoweredLending,
		title: "Industry, Innovation and Infrastructure",
		subTitle: "",
		description:
			"Building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation.",
	},
	{
		imageSrc: openSus,
		title: "Sustainable Cities and Communities",
		subTitle: "",
		description:
			"Developing sustainable urban areas that provide safe, inclusive, and resilient living environments for all.",
	},
	{
		imageSrc: ecoCity,
		title: "Life on Land",
		subTitle: "",
		description:
			"Protecting, restoring, and promoting sustainable use of terrestrial ecosystems, forests, and biodiversity.",
	}
];
