'use client';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiNodedotjs,
	SiFigma,
} from 'react-icons/si';
import { GiRingedPlanet } from 'react-icons/gi';
import Image from 'next/image';

import Resume from '../public/Resume.pdf';
import Astronaut2 from '../public/astronaut.webp';
import { useState } from 'react';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'bg-black dark text-white' : 'bg-white'}>
			<main className='px-10'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<GiRingedPlanet className='text-4xl dark:text-white' />
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									className='cursor-pointer text-2xl'
									onClick={() => {
										setDarkMode(!darkMode);
										console.log(darkMode);
									}}
								/>
							</li>
							<li>
								<a
									className='dark:bg-white bg-black dark:text-black text-white px-4 py-2 rounded-sm ml-8'
									href='https://cdn.discordapp.com/attachments/457992163670753301/1057427751172321360/Curriculo_Felipe_Cardoso.pdf'
									download>
									Resume
								</a>
								{/* Updated 27/12/2022 */}
							</li>
						</ul>
					</nav>
					<div className='text-center py-10 sm:p-10'>
						<h2 className='text-7xl sm:text-8xl py-2'>FELIPE CARDOSO</h2>
						<h3 className='text-3xl py-2'>Fullstack developer e programador</h3>
						<p className='py-6 leading-8 sm:px-16 lg:px-40'>
							Estudante de programação na faculdade{' '}
							<a
								href='https://www.unisanta.br'
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Universidade Santa Cecília
							</a>{' '}
							do curso{' '}
							<a
								href='https://conteudo.unisanta.br/landing-page-tecnologo-analise-e-desenvolvimento-de-sistemas '
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Análise e Desenvolvimento de Sistemas
							</a>
							, com foco em{' '}
							<span className='text-pink-500'>
								desenvolvimento web e de software
							</span>
							. Estou em busca de novas{' '}
							<span className='text-pink-500'>experiências profissionais</span>{' '}
							e procurando melhorar minhas habilidades relacionadas a criação.
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-6'>
						<a
							href='https://www.linkedin.com/in/imlymei/'
							rel='noreferrer'
							target={'_blank'}>
							<AiFillLinkedin />
						</a>
						<a
							href='https://github.com/imLymei'
							rel='noreferrer'
							target={'_blank'}>
							<AiFillGithub />
						</a>
					</div>
					<div className='relative left-[-15%] sm:left-[-10%] h-[30vw] sm:h-[20vw] w-[60vw] sm:w-[45vw] my-10'>
						<Image src={Astronaut2} alt='Lymei draw' fill={true} />
					</div>
				</section>
				<section className='relative text-center min-h-screen'>
					<h1 className='text-3xl py-16'>Skill Set</h1>
					<div className='grid grid-cols-1 x820:grid-cols-2 sm:p-16 gap-8 sm:gap-4'>
						<div className='shadow-lg p-2 m-auto flex flex-col justify-center items-center min-w-[300px] w-[30vw] max-w-[70vw] min-h-[144px] h-[20vh] border dark:border-white border-black rounded-sm'>
							<h2 className='text-2xl py-2'>Linguagens</h2>
							<div className='text-4xl md:text-5xl flex justify-center gap-[6%]'>
								<a
									href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
									target='_blank'
									rel='noreferrer'>
									<AiFillHtml5 className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
									target='_blank'
									rel='noreferrer'>
									<IoLogoCss3 className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
									target='_blank'
									rel='noreferrer'>
									<IoLogoJavascript className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://www.python.org'
									target='_blank'
									rel='noreferrer'>
									<IoLogoPython className='hover:scale-110 transition-all' />
								</a>
							</div>
						</div>
						<div className='shadow-lg p-2 m-auto flex flex-col justify-center items-center min-w-[300px] w-[30vw] max-w-[70vw] min-h-[144px] h-[20vh] border dark:border-white border-black rounded-sm'>
							<h2 className='text-2xl py-2'>Frameworks/Library</h2>
							<div className='text-4xl md:text-5xl flex justify-center gap-[3%]'>
								<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
									<SiReact className='hover:scale-110 transition-all' />
								</a>
								<a href='https://nextjs.org' target='_blank' rel='noreferrer'>
									<SiNextdotjs className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://tailwindcss.com'
									target='_blank'
									rel='noreferrer'>
									<SiTailwindcss className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://nodejs.org/en/'
									target='_blank'
									rel='noreferrer'>
									<SiNodedotjs className='hover:scale-110 transition-all' />
								</a>
								<a
									href='https://www.figma.com'
									target='_blank'
									rel='noreferrer'>
									<SiFigma className='hover:scale-110 transition-all' />
								</a>
							</div>
						</div>
					</div>
					<div className='py-16'>
						<h2 className='text-3xl mt-8'>Portfolio</h2>
						<p className='leading-8 sm:px-16 lg:px-40 py-8 p-6'>
							Aqui estão alguns dos meus{' '}
							<span className='text-pink-500'>mais recentes projetos</span>{' '}
							relacionados principalmente com a criação de sites usando{' '}
							<a
								href='https://nextjs.org'
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Next.js
							</a>{' '}
							ou alguns programas utilizando{' '}
							<a
								href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Javascript
							</a>{' '}
							ou{' '}
							<a
								href='https://www.python.org'
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Python
							</a>
							. Acesse meu{' '}
							<a
								href='https://github.com/imLymei'
								target='_blank'
								rel='noreferrer'
								className='text-indigo-700 dark:text-indigo-500'>
								Github
							</a>{' '}
							caso queira ver{' '}
							<span className='text-pink-500'>todos os meus projetos</span>.
						</p>
						<div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4'>
							<div className='relative min-w-[160px] min-h-[90px] w-[20vw] aspect-video dark:bg-white bg-black hover:scale-110 transition-all rounded-sm border border-black dark:border-white'>
								<a
									className='cursor-pointer'
									href='https://captur-one.vercel.app'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://github.com/imLymei/captur-proj/raw/main/public/print1.png'
										alt='Captur Portfolio'
										fill={true}
									/>
								</a>
							</div>
							<div className='relative min-w-[160px] min-h-[90px] [20vw] aspect-video dark:bg-white bg-black hover:scale-110 transition-all rounded-sm border border-black dark:border-white'>
								<a
									className='cursor-pointer'
									href='https://physic-engine.vercel.app'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://cdn.discordapp.com/attachments/457992163670753301/1057434786983059496/de64601d-592f-462a-bf0f-ac0af20058c6.png'
										alt='Physic engine'
										fill={true}
									/>
								</a>
							</div>
							<div className='relative min-w-[160px] min-h-[90px] [20vw] aspect-video dark:bg-white bg-black hover:scale-110 transition-all rounded-sm border border-black dark:border-white'>
								<a
									className='cursor-pointer'
									href='https://kariba-eight.vercel.app/'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://cdn.discordapp.com/attachments/457992163670753301/1057436940342935643/6d0d1fc6-a299-4d27-8e45-3b7fc1c03c1b.png'
										alt='Projeto de Probabilidade Kariba'
										fill={true}
									/>
								</a>
							</div>
							<div className='relative min-w-[160px] min-h-[90px] [20vw] aspect-video dark:bg-white bg-black hover:scale-110 transition-all rounded-sm border border-black dark:border-white'>
								<a
									className='cursor-pointer'
									href='https://github.com/imLymei/chatgpt-clone'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://cdn.discordapp.com/attachments/1033477432851836959/1057047734684753990/image.png'
										alt='Chatgpt Clone'
										fill={true}
									/>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className='p-8 text-center border-t dark:bg-black border-black dark:border-white grid grid-cols-2'>
				<h1 className='text-sm dark:text-white'>Felipe Cardoso©2022</h1>
				<h1 className='text-sm dark:text-white'>
					Powered by <a href=''>Next.js</a>
				</h1>
			</footer>
		</div>
	);
}
