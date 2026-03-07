const SkillsSection = () => {
	const skills = [
		{
			category: 'Languages & Web Tech',
			items: [
				'Python',
				'C/C++',
				'HTML/CSS',
				'JavaScript',
				'FastAPI',
				'Streamlit',
				'Gradio',
				'Pydantic',
				'WordPress',
				'cPanel',
				'SEO'
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3" />
				</svg>
			),
		},
		{
			category: 'AI, Data & Concepts',
			items: [
				'TensorFlow',
				'PyTorch',
				'Scikit-learn',
				'NumPy',
				'Pandas',
				'Matplotlib',
				'Seaborn',
				'OpenCV',
				'AIF360',
				'Joblib',
				'GenAI Orchestration',
				'LangGraph',
				'LangChain',
				'LangSmith',
				'Multi-model Fusion',
				'Transfer Learning',
				'Prompt Engineering',
				'Data Wrangling'
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Tools, DevOps & APIs',
			items: [
				'Docker',
				'Modular Containerization',
				'Render',
				'Reproducibility',
				'End-to-End ML Deployment',
				'Git',
				'GitHub',
				'Bitbucket',
				'Linux Shell Scripting',
				'Tavily API',
				'OpenRouter',
				'LM-Studio',
				'OpenAI API',
				'Gemini AI'
			],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
	];

	return (
		<div className="w-full pt-4">
			<div className="space-y-4 max-w-sm mx-auto text-center">
				<div className="space-y-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center justify-center space-x-2">
								{skillGroup.icon}
								<span>{skillGroup.category}</span>
							</h4>
							<div className="flex flex-wrap justify-center gap-1.5">
								{skillGroup.items.map((skill) => (
									<span
										key={skill}
										className="px-2.5 py-1 text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
