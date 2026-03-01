const CertificatesSection = () => {
    const certificates = [
        {
            name: 'Foundation: Introduction to LangChain - Python',
            issuer: 'LangChain Academy',
            date: 'Mar 2026',
            url: 'https://academy.langchain.com/certificates/tbwbp4yzox',
        },
        {
            name: 'Google Project Management Specialization',
            issuer: 'Coursera',
            date: 'Dec 2025',
            url: 'https://coursera.org/share/923f79f095e8df92d39e0e1d5469a686',
        },
        {
            name: 'Google IT Support Specialization',
            issuer: 'Coursera',
            date: 'Oct 2025',
            url: 'https://coursera.org/share/e8ffe090c4da62fee39d8dc3ab9dd85d',
        },
        {
            name: 'Fundamentals of Deep Learning',
            issuer: 'Nvidia Deep Learning Institute, UK',
            date: 'Dec 2023',
            url: 'https://courses.nvidia.com/certificates/ce320a5e1bf046d28c0e4a2a7b88e129/',
        },
        {
            name: 'Pandas',
            issuer: 'Kaggle',
            date: 'Sep 2023',
            url: 'https://www.kaggle.com/learn/certification/ascendingtechie/pandas',
        },
        {
            name: 'Introduction to Machine Learning',
            issuer: 'Kaggle',
            date: 'Aug 2022',
            url: 'https://www.kaggle.com/learn/certification/ascendingtechie/intro-to-machine-learning',
        },
        {
            name: 'Python',
            issuer: 'Kaggle',
            date: 'Jul 2023',
            url: 'https://www.kaggle.com/learn/certification/ascendingtechie/python',
        },
        {
            name: 'AWS Machine Learning',
            issuer: 'Coursera',
            date: 'May 2020',
            url: 'https://coursera.org/verify/YPK4PS2878CQ',
        },
    ];

    return (
        <div className="py-6 bg-white dark:bg-gray-900 px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Certificates</h3>
                    <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificates.map((cert, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white leading-tight">
                                    {cert.url ? (
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">
                                            {cert.name}
                                        </a>
                                    ) : (
                                        cert.name
                                    )}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{cert.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificatesSection;
