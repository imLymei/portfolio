import React from 'react';
import { IoMdRocket } from 'react-icons/io';

function page() {
	return (
		<div className='overflow-hidden text-white'>
			<div className='absolute left-0 top-0 whiteStar h-[100vh] sm:-z-10 flex flex-col justify-center items-center p-8 text-center'>
				<h2>Caso não esteja carregando clique no foguete para baixar o Resume</h2>
				<a href='/Resume.pdf' download={true}>
					<IoMdRocket className='cursor-pointer text-6xl rotate-45 dark:text-white hover110' />
				</a>
			</div>
			<embed src='Resume.pdf' type='application/pdf' className='h-[100vh] w-[100vw] z-10' />
		</div>
	);
}

export default page;
