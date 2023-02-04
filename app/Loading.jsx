import { IoMdRocket } from 'react-icons/io';

function Loading() {
	return (
		<div className='whiteStar text-white h-[100vh] flex justify-center items-center'>
			<div className='flex justify-center items-center floating-0 mb-2'>
				<IoMdRocket className='cursor-pointer text-6xl rotate-45 dark:text-white hover110' />
				<h2>Carregando...</h2>
			</div>
		</div>
	);
}

export default Loading;
