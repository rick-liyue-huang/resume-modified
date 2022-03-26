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
		name: "Resume Project",
		description:
			"Online resume webapp created by next.js and tailwind.css",
		image_path: "/images/resume.png",
		deployed_url: "https://resume-modified.vercel.app",
		github_url: "https://github.com/rick-liyue-huang/resume-modified",
		category: ["react", "next"],
		key_techs: ["Next.js", "Tailwind CSS", "React-icons"],
	},
	{
		id: 2,
		name: "Axios Simulation",
		image_path: "/images/axios-simulation.png",
		deployed_url: "https://github.com/rick-liyue-huang/Axios-Simulation/blob/main/README.md",
		github_url: "https://github.com/rick-liyue-huang/Axios-Simulation",
		category: ["javascript"],
		description:
			"In this project mainly I use original javascript language to simulate Axios.js framework",
		key_techs: ["javascript"],
	},
	{
		id: 3,
		name: "Daily Task Management WebApp",
		image_path: "/images/task-mern.png",
		deployed_url: "https://mernlistwebapp.herokuapp.com",
		github_url: "https://github.com/rick-liyue-huang/TaskList-Mern",
		category: ["node", "mongodb", "react", "express"],
		description:
			"Using MERN to create one daily task management webapp, through which we can register or login to create task and add notes on each task",
		key_techs: [
			"React",
			"Redux-Toolkit",
			"Express",
			"MongoDB",
			"REST API",
			"JWT",
		],
	},
	{
		id: 4,
		name: "Dig Webpack5",
		image_path: "/images/webpack.png",
		deployed_url: "https://jovial-melomakarona-e7cb49.netlify.app",
		github_url: "https://github.com/rick-liyue-huang/Try-Webpack",
		category: ["webpack", "javascript"],
		description:
			"Researching webpack5 and realize the different bundle status under directories, including build-base-conf, build-multi-page, build-splitChunks and so on, in the end simulating the react.js bundle tool to bundle one typescript demo project and deploy online",
		key_techs: [
			"Javascript",
			"Webpack",
			"React.js",
		],
	}
];
