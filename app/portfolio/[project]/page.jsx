import PortfolioPage from '../../PortfolioPage';
import { ProjectsNames } from '../../ProjectsNames';

export default function page({ params }) {
	let exist = false;

	return (
		<div>
			{ProjectsNames.map((e, index) => {
				if (params.project == e.name) {
					exist = true;
					return <iframe key={index} src={e.url} className='h-[100vh] w-[100vw]' />;
				} else if (index == ProjectsNames.length - 1 && !exist) {
					return <PortfolioPage key={0} />;
				}
			})}
		</div>
	);
}
