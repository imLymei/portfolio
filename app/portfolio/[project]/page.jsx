import PortfolioPage from '../../PortfolioPage';
import { ProjectsNames } from '../../ProjectsNames';

export default function page({ params }) {
	return (
		<div>
			{ProjectsNames.map((e, index) => {
				if (params.project == e.name) {
					return <iframe key={index} src={e.url} className='h-[100vh] w-[100vw]' />;
				}
				if (index == ProjectsNames.length - 1) {
					return <PortfolioPage key={0} />;
				}
			})}
		</div>
	);
}
