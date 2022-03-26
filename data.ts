import { RiComputerLine } from "react-icons/ri";
import { GrWorkshop } from 'react-icons/gr'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
	{
		Icon: RiComputerLine,
		title: "Frontend Development",
		about:
			"Building a beautiful and scalable WebApp using <b>HTML</b>,<b>CSS</b>, <b>Javascript</b>, <b>React.js</b> and <b> Angular</b> ",
	},
	{
		Icon: FaServer,
		title: "Backend  Development",
		about:
			"Handling database including MySQL and MongoDB, server, api using <b>Express </b> and creating BFF (Backend for Frontend) layer using <b>node.js</b>",
	},
	{
		Icon: AiOutlineApi,
		title: "API Development",
		about:
			"developing robust <b>REST API</b> and <b>GraphQL API</b> in <b>MERN</b> ",
	},
	{
		Icon: MdDeveloperMode,
		title: "Competitive Coder",
		about: "Loving to widen professional field by touching new professional technique and application",
	},
	{
		Icon: AiOutlineAntDesign,
		title: "UI/UX designer",
		about: "stunning user interface designer using <b>Figma</b>, <b>MUI</b> and <b>Antd</b>",
	},
	{
		Icon: RiComputerLine,
		title: "More things",
		about: "Keeping efficient communication with colleagues and clients, and recording weekly working processing reports and project conclusion as well as",
	},
];

export const languages: Skill[] = [
	{
		Icon: BsCircleFill,
		name: "Javascript",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "React.js",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Next.js",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Node.js",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Express.js",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Angular",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "jQuery",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Express.js",
		level: "80%",
	},
	{
		Icon: BsCircleFill,
		name: "MySQL",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "MongoDB",
		level: "80%",
	},
	{
		Icon: BsCircleFill,
		name: "GraphQL",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Webpack",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Git",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Firebase",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "AWS",
		level: "90%",
	},
	{
		Icon: BsCircleFill,
		name: "Java",
		level: "80%",
	},
];

export const tools: Skill[] = [
	{
		Icon: BsCircleFill,
		name: "Figma",
		level: "85",
	},
	{
		Icon: BsCircleFill,
		name: "Photoshop",
		level: "45",
	},
	{
		Icon: BsCircleFill,
		name: "Illustrator",
		level: "60",
	},
	{
		Icon: BsCircleFill,
		name: "Framer",
		level: "45",
	},

];

export const projects: IProject[] = [
	{
		id: 1,
		name: "COVID Tracker",
		description:
			"This app shows a statistical view about corona virus over the world",
		image_path: "/images/covid.jpg",
		deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
		github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
		category: ["react"],
		key_techs: ["React", "Chart.js", "Material UI"],
	},
	{
		id: 2,
		name: "Algorithm Visualizer",
		image_path: "/images/algoVisual.png",
		deployed_url: "https://visual-algorithm.web.app/",
		github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
		category: ["react"],
		description:
			"An web app which shows how an algorithm (path finding or sorting) works with cool animation",
		key_techs: ["React", "firebase", "Framer Motion"],
	},

	{
		id: 3,
		name: "Dev Talks",
		image_path: "/images/dev.jpg",
		deployed_url: "https://dev-talks.herokuapp.com/",
		github_url: "https://github.com/Dey-Sumit/Dev-talks",
		category: ["node", "mongodb", "react"],
		description:
			"Social Media app for developers who can share project,create posts,etc...",
		key_techs: [
			"React",
			"Redux",
			"Node",
			"Express",
			"Mongo",
			"REST API",
			"Bootstrap",
		],
	},

	{
		id: 4,
		name: "Realtime Chat App",
		image_path: "/images/chatapp.jpg",
		deployed_url: "https://sumit-chat.netlify.app/",
		github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
		category: ["node", "react"],
		description:
			"Basic Realtime Chat App where one can create a room can talk to each other",
		key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
	},

	{
		id: 5,
		name: "Tweeter Clone",
		image_path: "/images/tweetme.jpg",
		deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
		github_url: "https://github.com/Dey-Sumit/tweetme",
		category: ["django", "react"],
		description:
			"First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
		key_techs: ["React", "Django", "Django REST API"],
	},

	{
		id: 6,
		name: "Color Classification using tf.js",
		image_path: "/images/color.jpg",
		deployed_url: "!#",
		github_url: "https://github.com/Dey-Sumit/color-classification",
		category: ["express"],
		description:
			"Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
		key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
	},
	{
		id: 7,
		name: "YouTube using YouTube ",
		image_path: "/images/youtubeClone.png",
		deployed_url: "https://not-utube.web.app/",
		github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
		category: ["express"],
		description:
			'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
		key_techs: [
			"React",
			"Redux",
			"Firebase Auth",
			"YouTube API",
			"Sass",
			"Bootstrap",
		],
	},

];
