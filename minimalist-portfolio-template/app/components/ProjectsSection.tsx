const ProjectsSection = () => {
    const projects = [
        {
            title: 'Healthcare Triage Assistant - End-to-End ML Deployment',
            url: 'https://github.com/rishabhpatel9/Healthcare-Triage-Assistant',
            highlights: [
                'Built an application for non-clinical hospital staff to predict patient triage levels from vitals, enabling better prioritization.',
                'Trained ML model on Synthetic Medical Triage Priority Dataset (Kaggle) using scikit-learn, pandas, seaborn, joblib.',
                'Deployed full stack with FastAPI (backend), Streamlit (frontend), Docker + Render (deployment).',
                'Integrated OpenRouter API for concise GenAI explanations of predictions; engineered prompts for token efficiency.',
            ]
        },
        {
            title: 'Detecting and Mitigating Algorithmic Bias in Face Recognition Algorithms: A Research Study',
            url: 'https://github.com/rishabhpatel9/Bias-Mitigation-FaceRecog',
            highlights: [
                'Research Aim: Investigated techniques to detect and mitigate algorithmic bias in facial recognition by designing a gender classification model as a case study.',
                'Methodology: Designed and trained convolutional neural networks (CNNs) on multiple publicly available facial datasets. Conducted an extensive literature review to understand bias origins and fairness challenges within facial recognition.',
                'Bias Mitigation: Implemented the AI Fairness 360 (AIF360) toolkit using reweighing and adversarial de-biasing techniques. Quantitatively evaluated bias reduction using key fairness metrics (disparate impact, statistical parity difference, equal opportunity difference, average odds difference).',
                'Results & Contributions: Achieved a significant decrease in bias (e.g., disparate impact reduced from ~1.034 to ~1.000) while preserving high model accuracy. Addressed ethical, legal, and social implications inherent in deploying facial recognition technologies.',
            ]
        },
        {
            title: 'Automated Driving Robot Car Simulation using Unity',
            url: '',
            highlights: [
                'Programmed a car using C# in Unity to drive automatically on a path with turns, blockades, slopes, and angular surfaces using sensors to detect surfaces and blocks while also auto-regulating car speed.',
            ]
        },
        {
            title: 'COVID-19 Simulation using Netlogo',
            url: '',
            highlights: [
                'Created a COVID-19 simulation that simulates how the virus is spread, the effects of vaccination/antibodies, and more.',
                'The purpose was to study the effectiveness of various steps taken to prevent like lockdown, self isolation, and vaccination.',
            ]
        },
        {
            title: 'Controlling Operating System and Applications using Hand Motion Gestures',
            url: 'https://github.com/rishabhpatel9/Gesture-Control',
            highlights: [
                'Created a Python and OpenCV based system that controls applications and OS in a Linux environment using motion gestures from a laptop webcam based on a gesture recognition model trained using supervised machine learning.',
                'Application dependent gesture mapping to execute different commands with the use of PyautoGUI.',
                'Users can add application profiles, allowing them to customize the commands mapped to a gesture.',
            ]
        }
    ];

    return (
        <div className="py-6 bg-white dark:bg-gray-900 px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Projects</h3>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                </div>

                <div className="space-y-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="relative">
                            <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                                <div className="space-y-1">
                                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                                        {project.url ? (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </h4>
                                    <ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-4 space-y-1 mt-2">
                                        {project.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx}>
                                                {highlight.includes(': ') ? (
                                                    <>
                                                        <strong className="text-gray-800 dark:text-gray-200">{highlight.split(': ')[0]}:</strong>
                                                        {' ' + highlight.split(': ').slice(1).join(': ')}
                                                    </>
                                                ) : (
                                                    highlight
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;
