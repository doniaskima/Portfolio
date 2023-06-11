import {
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

export const GITHUB_API_URL = 'https://api.github.com';

export const GITHUB_USERNAME = 'doniaskima';


export const Institutions = [
	{
		id: 1,
		institution: 'Higher Institute of Computer Science and Mathematics of Monastir.',
		logo: '/assets/images/institutions/isimm.png',
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2021',
		endDate: 'Present',
	},
 
];

export const SocialMedia = [
	{
		id: 1,
		label: 'Github',
		icon: <FaGithub />,
		url: 'https://github.com/doniaskima',
	},
	{
		id: 2,
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/donia-skima/',
	},
	{
		id: 3,
		label: 'Mail to Donia',
		icon: <FaRegEnvelope />,
		url: 'doniaskima344@gmail.com',
	},
];
