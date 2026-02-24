const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Technical Services Analyst (Zone 1)',
			company: 'HCA Healthcare',
			period: 'Oct 2025 - Jan 2026',
			location: 'London, UK',
			highlights: [
				'Enhanced infrastructure reliability by managing full device life cycle, ensuring 100% compliance with HCA security standards and driving continuous IT process improvements; earned 5 official recognitions for outstanding IT support.',
				'Deployed and configured 200+ clinical and administrative devices, streamlining imaging workflows with standardized corporate builds and reducing setup time by 30%.',
				'Resolved 95% of end-user tickets within SLA, troubleshooting hardware, peripherals, and network/application issues to minimize downtime and maintain high service quality.',
				'Administered enterprise systems (Active Directory, SCCM, Intune, Jamf Pro, Citrix Cloud, Cisco ISE), improving identity management and endpoint security across 15+ hospital sites and leveraged operational platforms (Exchange Admin Center, Azure PIM, Dameware, RDP, Zebra Utilities) to optimize system administration and reduce manual overhead.',
				'Strengthened network resilience by patching data points, assigning VLANs, and ensuring secure and reliable connectivity.',
			],
		},
		{
			role: 'Patient Access Officer',
			company: 'HCA Healthcare',
			period: 'Jul 2024 - Oct 2025',
			location: 'London, UK',
			highlights: [
				'Managed patient scheduling and registration for 1000+ monthly cases across adult and pediatric services, maintaining accurate records in Meditech/SharePoint with strict GDPR compliance; streamlined insurance workflows by coordinating with providers, quoting, invoicing, and payments, cutting claim turnaround by 15% and reducing outstanding invoices.',
				'Consistently delivered high patient satisfaction and supported clinical staff in care standards, earning 7 recognitions for accuracy and service excellence; certified in Basic Life Support (Adults & Pediatrics) and the NHS Care Certificate.',
			],
		},
		{
			role: 'Technical Support Analyst',
			company: "The Baker's Nest",
			period: 'Oct 2018 - Oct 2021',
			location: 'Vadodara, Gujarat',
			highlights: [
				'Managed company issued devices, ensuring seamless operation through software installations, network setup, and device integration. Key duties included deploying the Microsoft Office suite, configuring network access, and setting up third-party devices like the Cricut Explorer 2. Provided onsite technical support, troubleshooting user issues, and performing hardware fixes/upgrades to maintain efficiency and reliability.',
				'Also developed product designs for compatibility with Cricut devices, ensuring seamless fabrication into final physical products.',
			],
		},
		{
			role: 'Web Developer',
			company: "The Baker's Nest",
			period: 'Sep 2017 - Oct 2018',
			location: 'Vadodara, Gujarat',
			highlights: [
				'Designed and developed a cutting edge WordPress website, integrating WooCommerce, payment processing, and SEO capabilities.',
				'Collaborated with cross-functional teams to ensure seamless integration of key functionalities and deliver an exceptional user experience.',
				'Implemented robust security measures and conducted thorough testing to ensure optimal performance and reliability.',
				'Utilized effective SEO strategies to enhance website visibility and boost organic traffic.',
				'Proactively monitored website analytics and made data driven decisions to continuously optimize site performance.',
				'Demonstrated strong problem solving skills by troubleshooting and resolving technical issues promptly and efficiently.',
			],
		},
		{
			role: '.NET Developer (Internship)',
			company: 'Sannibh Technologies',
			period: 'May 2019 - May 2019',
			location: 'Vadodara, Gujarat',
			highlights: [
				'Developed a highly efficient time slot management/booking system for a housing society, utilizing .NET framework and SQL database technology.',
				'Designed and implemented a robust database structure to store and manage time slots for future events, ensuring seamless utilization of common amenities.',
				'Integrated secure user login functionality, enabling individuals to book time slots using their unique login IDs.',
				'Implemented active event booking features, ensuring seamless and hassle-free utilization of common amenities for all society members.',
			],
		},
	];

	return (
		<div className="py-6 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				<div className="flex flex-col">
					{experiences.map((exp, idx) => (
						<div key={idx} className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 pb-6 last:pb-0">
							<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
							<div className="space-y-1">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between">
									<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
									<span className="text-sm text-gray-600 dark:text-gray-400 shrink-0">{exp.period}</span>
								</div>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between">
									<p className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
									<p className="text-sm text-gray-500 dark:text-gray-400 italic">{exp.location}</p>
								</div>
								<ul className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-4 space-y-1 mt-2">
									{exp.highlights.map((highlight, hIdx) => (
										<li key={hIdx}>{highlight}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
