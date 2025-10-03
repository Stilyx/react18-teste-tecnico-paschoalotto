import GithubHeader from '@/features/githubHeader';
import GithubSearchCard from '@/features/githubSearchCard';

export default function GithubSearchUser() {
	return (
		<div className="w-full min-h-screen h-full bg-github-light-background dark:bg-github-dark-background transition-all duration-300">
			<GithubHeader />
			<GithubSearchCard />
		</div>
	);
}
