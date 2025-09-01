export const profile = {
	fullName: '韩越兴',
	title: '教授',
	institute: '上海大学计算机工程与科学学院',
	author_name: 'Han Yuexing', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: '机器学习与深度学习', description: '运用机器学习和深度神经网络技术解决复杂问题，构建智能系统，研究前沿算法在各领域的应用', field: 'machine-learning' },
		{ title: '材料图像处理', description: '开发材料图像处理算法，用于分析材料结构和性能，提取微观特征，优化材料合成工艺', field: 'image-processing' },
		{ title: '材料文本挖掘', description: '运用自然语言处理技术从科学文献中提取材料研究知识，构建材料知识图谱，辅助材料设计与发现', field: 'text-mining' },
		{ title: '机器人视觉', description: '研究机器人视觉系统，提高机器人的环境感知能力，开发先进的视觉算法提升机器人操作精度', field: 'robot-vision' },
		{ title: '数据分析', description: '分析大规模数据集，提取有价值的信息，开发高效算法处理复杂数据结构和模式', field: 'data-analysis' },
		{ title: '人工智能', description: '探索人工智能技术在科学研究和实际应用中的潜力，致力于解决实际问题和提高系统效率', field: 'artificial-intelligence' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'han_yx@shu.edu.cn',
	linkedin: '',
	x: '',
	github: 'han-yuexing',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=eMxUeB8AAAAJ&hl=en',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://han-yuexing.github.io', // Astro needs to know your site's deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Our custom light blue theme
	darkTheme: '', // Disabled dark theme
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const carousel = {
	images: [
		'/images/carousel/slide1.jfif',
		'/images/carousel/slide2.jfif',
		'/images/carousel/slide3.jfif'
	],
	autoPlay: true,
	interval: 3000, // 3秒自动切换
	showDots: true,
	showArrows: false
}

export const analytics = {
	counterapi: {
		enabled: true,
		workspace: 'hansBlog',
		counter: 'visitorCounter'
	}
}

export const siteInfo = {
	lastUpdated: '2025-09-01'
}

export const seo = {
	default_title: '韩越兴 - 个人网站',
	default_description: '韩越兴教授的个人学术网站，包含研究介绍、教学信息和联系方式',
	default_image: '',
}
