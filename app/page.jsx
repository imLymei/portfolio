'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillHtml5, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { GiRingedPlanet } from 'react-icons/gi';
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { SiFigma, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Astronaut from '../public/astronaut.png';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? 'whiteStar text-white  dark transition-all' : ' blackStar transition-all'}>
			<main className='px-10'>
				<p className='absolute text-xs sm:right-[4vw] right-[16vw] sm:top-[9vh] top-[10vh] floating dark:opacity-0 opacity-50'>
					White Space...
				</p>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between'>
						<GiRingedPlanet className='text-4xl dark:text-white floating' />
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									className='cursor-pointer text-2xl floating-1'
									onClick={() => {
										setDarkMode(!darkMode);
										console.log(darkMode);
									}}
								/>
							</li>
							<li className='floating-2'>
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
						<h1 className='text-7xl sm:text-8xl py-2 floating-2'>FELIPE CARDOSO</h1>
						<h2 className='text-3xl py-2 floating-1'>Fullstack developer e programador</h2>
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
							, com foco em <span className='text-pink-500'>desenvolvimento web e de software</span>. Estou em
							busca de novas <span className='text-pink-500'>experiências profissionais</span> e procurando
							melhorar minhas habilidades relacionadas a criação.
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-6'>
						<a href='https://www.linkedin.com/in/imlymei/' rel='noreferrer' target={'_blank'}>
							<AiFillLinkedin className='sm:hover:scale-110 transition-all floating-1' />
						</a>
						<a href='https://github.com/imLymei' rel='noreferrer' target={'_blank'}>
							<AiFillGithub className='sm:hover:scale-110 transition-all floating' />
						</a>
					</div>
					<div className='relative left-[-20%] sm:left-[-10%] h-[30vw] sm:h-[20vw] w-[60vw] sm:w-[45vw] my-10 astronaut'>
						<Image src={Astronaut} alt='Lymei draw' fill={true} />
					</div>
				</section>
				<section className='relative text-center min-h-screen'>
					<h2 className='text-3xl py-16 floating'>Skill Set</h2>
					<div className='grid grid-cols-1 x820:grid-cols-2 sm:p-16 gap-8 sm:gap-4'>
						<div className='dark:bg-black/75 bg-white/75 shadow-lg dark:shadow-white/10 p-2 m-auto flex flex-col justify-center items-center min-w-[300px] w-[30vw] max-w-[70vw] min-h-[144px] h-[20vh] border border-black dark:border-white rounded-sm floating'>
							<h3 className='text-2xl py-2'>Linguagens</h3>
							<div className='text-4xl md:text-5xl flex justify-center gap-[6%]'>
								<a
									href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
									target='_blank'
									rel='noreferrer'>
									<AiFillHtml5 className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel='noreferrer'>
									<IoLogoCss3 className='sm:hover:scale-110 transition-all' />
								</a>
								<a
									href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
									target='_blank'
									rel='noreferrer'>
									<IoLogoJavascript className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://www.python.org' target='_blank' rel='noreferrer'>
									<IoLogoPython className='sm:hover:scale-110 transition-all' />
								</a>
							</div>
						</div>
						<div className='dark:bg-black/75 bg-white/75 shadow-lg dark:shadow-white/10 p-2 m-auto flex flex-col justify-center items-center min-w-[300px] w-[30vw] max-w-[70vw] min-h-[144px] h-[20vh] border dark:border-white border-black rounded-sm floating-1'>
							<h3 className='text-2xl py-2'>Frameworks/Library</h3>
							<div className='text-4xl md:text-5xl flex justify-center gap-[3%]'>
								<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
									<SiReact className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://nextjs.org' target='_blank' rel='noreferrer'>
									<SiNextdotjs className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
									<SiTailwindcss className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
									<SiNodedotjs className='sm:hover:scale-110 transition-all' />
								</a>
								<a href='https://www.figma.com' target='_blank' rel='noreferrer'>
									<SiFigma className='sm:hover:scale-110 transition-all' />
								</a>
							</div>
						</div>
					</div>
					<div className='py-16'>
						<h2 className='text-3xl mt-8 floating-1'>Portfolio</h2>
						<p className='leading-8 sm:px-16 lg:px-40 py-8 p-6'>
							Aqui estão alguns dos meus <span className='text-pink-500'>mais recentes projetos</span>{' '}
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
							caso queira ver <span className='text-pink-500'>todos os meus projetos</span>.
						</p>
						<div className='grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4'>
							<div className='relative min-w-[144px] min-h-[81px] w-[20vw] aspect-video dark:bg-white bg-black sm:hover:scale-110 transition-all rounded-sm border border-black dark:border-white floating-1'>
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
							<div className='relative min-w-[144px] min-h-[81px] [20vw] aspect-video dark:bg-white bg-black sm:hover:scale-110 transition-all rounded-sm border border-black dark:border-white floating-2'>
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
							<div className='relative min-w-[144px] min-h-[81px] [20vw] aspect-video dark:bg-white bg-black sm:hover:scale-110 transition-all rounded-sm border border-black dark:border-white floating'>
								<a
									className='cursor-pointer'
									href='https://tower-of-hanoi-eight.vercel.app'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://cdn.discordapp.com/attachments/1033477432851836959/1063144115874840607/image.png'
										alt='Projeto da Torre de Hanoi'
										fill={true}
									/>
								</a>
							</div>
							<div className='relative min-w-[144px] min-h-[81px] [20vw] aspect-video dark:bg-white bg-black sm:hover:scale-110 transition-all rounded-sm border border-black dark:border-white floating-1'>
								<a
									className='cursor-pointer'
									href='https://valorant-strategy-maker.vercel.app'
									target='_blank'
									rel='noreferrer'>
									<Image
										src='https://cdn.discordapp.com/attachments/457992163670753301/1065138100268965979/image.png'
										alt='Valorant Strategy Maker'
										fill={true}
									/>
								</a>
							</div>
						</div>
					</div>
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
