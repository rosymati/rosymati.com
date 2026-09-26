export const site = {
	name: 'Matilde',
	description:
		'Systems programmer based in Europe, mostly writing Rust and occasionally messing with Gleam.',
	source: 'https://github.com/rosymati/rosymati.com',
	rssTitle: "Mati's Blog",
	rssDescription: "systems programming, Rust, and whatever else I'm building",
};

export const nav = [
	{ href: '/about', label: 'about' },
	{ href: '/projects', label: 'work' },
	{ href: '/blog', label: 'notes' },
	{ href: '/contacts', label: 'say hello' },
];

export const contacts = {
	github: {
		name: 'GitHub',
		handle: '@rosymati',
		href: 'https://github.com/rosymati',
	},
	bluesky: {
		name: 'Bluesky',
		handle: '@rosymati.com',
		href: 'https://bsky.app/profile/rosymati.com',
	},
	fediverse: {
		name: 'Fediverse',
		handle: '@matilde@tech.lgbt',
		href: 'https://tech.lgbt/@matilde',
	},
	discord: {
		name: 'Discord',
		handle: '@milksheep',
		href: 'https://discord.com',
	},
	twitter: {
		name: 'Twitter',
		handle: '@_rosymati',
		href: 'https://x.com/_rosymati',
	},
	email: {
		name: 'Email',
		handle: 'hello@rosymati.com',
		href: 'mailto:hello@rosymati.com',
	},
};

export const projects = [
	{
		name: 'verdi',
		description:
			'An elegant Wayland compositor built from scratch, along with a full ecosystem of Rust libraries powering it.',
		tags: ['Rust', 'Wayland', 'Compositor'],
		href: 'https://verdi.rocks',
	},
	{
		name: 'sap',
		description: 'A small, simple and sweet argument parser for Rust.',
		tags: ['Rust', 'CLI', 'Library'],
		href: 'https://github.com/tailwags/sap',
	},
	// {
	// 	name: 'blossom',
	// 	description: 'A delightful package manager for Linux.',
	// 	tags: ['Rust', 'Linux', 'Systems'],
	// 	href: 'https://github.com/tailwags/blossom',
	// },
	{
		name: 'bread',
		description: 'A modern UEFI bootloader for the Linux kernel.',
		tags: ['Rust', 'UEFI', 'Linux'],
		href: 'https://github.com/tailwags/bread',
	},
	{
		name: 'puppyutils',
		description:
			'A Rust reimplementation of coreutils, util-linux, and find-utils.',
		tags: ['Rust', 'Linux', 'Systems'],
		href: 'https://puppyutils.org/',
	},
	{
		name: 'maple',
		description: 'A new Linux environment written in Rust.',
		tags: ['Rust', 'Linux'],
		href: 'https://github.com/tailwags/maple',
	},
	// {
	// 	name: 'cake',
	// 	description: 'The Portal ending screen, running in your browser.',
	// 	tags: ['TypeScript', 'Web'],
	// 	href: 'https://cake.matilde.pet/',
	// },
	{
		name: 'podzol',
		description: 'A modern package manager for Minecraft modpacks.',
		tags: ['Rust', 'Minecraft', 'CLI'],
		href: 'https://github.com/rosymati/podzol',
	},
];

export const rings = [
	// {
	// 	name: 'nix webring',
	// 	member: 'matilde',
	// 	base: 'https://nixwebr.ing',
	// 	random: true,
	// },
	{
		name: 'pet webring',
		member: 'matilde.pet',
		base: 'https://petwebr.ing',
		random: true,
	},
];
