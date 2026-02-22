import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen md:h-screen flex flex-col bg-white dark:bg-gray-900 pb-16 sm:pb-0">
			<div className="flex-1 grid grid-cols-1 md:grid-cols-5 h-full">
				{/* Left Column - Profile */}
				<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:flex md:items-center">
					<ProfileSection />
				</div>

				{/* Right Column - Skills, Projects, Experience, Certificates */}
				<div className="md:col-span-3 flex flex-col md:overflow-y-auto">
					{/* Skills Section */}
					<div className="">
						<SkillsSection />
					</div>

					{/* Projects Section */}
					<div>
						<ProjectsSection />
					</div>

					{/* Experience Section */}
					<div>
						<ExperienceSection />
					</div>

					{/* Certificates Section */}
					<div>
						<CertificatesSection />
					</div>
				</div>
			</div>
		</main>
	);
}
