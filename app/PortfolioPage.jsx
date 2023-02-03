'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { GiRingedPlanet } from 'react-icons/gi';
import { ProjectsNames } from './ProjectsNames';

export default function PortfolioPage() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? 'whiteStar text-white  dark transition-all' : ' blackStar transition-all'}>
			<main className='px-10'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<div className='floating-1'>
							<Link href='/'>
								<GiRingedPlanet className='cursor-pointer text-4xl dark:text-white hover110' />
							</Link>
						</div>
						<ul className='flex items-center'>
							<li className='floating-1'>
								<BsFillMoonStarsFill
									className='cursor-pointer text-2xl hover110'
									onClick={() => {
										setDarkMode(!darkMode);
									}}
								/>
							</li>
							<li className='floating-2'>
								<div className='hover110 ml-8'>
									<a
										className='dark:bg-white bg-black dark:text-black text-white px-4 py-2 rounded-sm'
										href='/resume'>
										Resume
									</a>
								</div>
								{/* Updated 27/12/2022 */}
							</li>
						</ul>
					</nav>
					<div className='text-center py-10 sm:p-10'>
						<h1 className='text-6xl sm:text-8xl py-2 floating-2'>PORTFOLIO</h1>
						<p className='pText py-6'>
							Aqui estão alguns dos meus <span className='text-pink-500'>mais recentes projetos</span>{' '}
							relacionados principalmente com a criação de sites usando{' '}
							<a href='https://nextjs.org' target='_blank' rel='noreferrer' className='link'>
								Next.js
							</a>{' '}
							ou alguns programas em{' '}
							<a
								href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
								target='_blank'
								rel='noreferrer'
								className='link'>
								Javascript
							</a>{' '}
							ou{' '}
							<a href='https://www.python.org' target='_blank' rel='noreferrer' className='link'>
								Python
							</a>
							.
						</p>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-8 mb-10'>
						{ProjectsNames.map((e, index) => {
							return (
								<div key={index}>
									<div className={`portfolioCard floating-${Math.round((Math.random() * 10) % 3)}`}>
										<a className='cursor-pointer' href={`/portfolio/${e.name}`}>
											<Image src={e.image} alt='Captur Portfolio' fill={true} sizes='1' />
										</a>
									</div>
									<h2 className='text-center py-2'>{e.title}</h2>
									<div className='grid grid-flow-col justify-evenly gap-y-2'>
										{e.tags.map((e, index) => {
											return (
												<h3
													key={index}
													className={`cursor-default border dark:border-white dark:bg-black/75 bg-white/75 border-black w-[6vw] text-center rounded-sm ${
														index % 3 == 0
															? `col-[1]`
															: index % 3 == 1
															? 'col-[2]'
															: index % 3 == 2
															? 'col-[3]'
															: ''
													}`}>
													{e}
												</h3>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
					<p className='pText p-6 text-center'>
						Caso queira ver <span className='text-pink-500'>todos os meus projetos</span>, acesse meu{' '}
						<a href='https://github.com/imLymei' target='_blank' rel='noreferrer' className='link'>
							Github
						</a>
						!
					</p>
				</section>
			</main>
			<footer className='p-8 px-[10vw] x820:px-[25vw] text-center border-t dark:bg-black bg-white border-black dark:border-white grid grid-cols-2'>
				<h2 className='text-sm dark:text-white'>Felipe Cardoso©2022</h2>
				<h2 className='text-sm dark:text-white'>
					Powered by <a href=''>Next.js</a>
				</h2>
			</footer>
		</div>
	);
}
