'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillHtml5, AiFillLinkedin } from 'react-icons/ai';
import { BsArrowUpRight, BsFillMoonStarsFill } from 'react-icons/bs';
import { GiRingedPlanet } from 'react-icons/gi';
import { IoLogoCss3, IoLogoJavascript, IoLogoPython, IoMdRocket } from 'react-icons/io';
import {
	SiCsharp,
	SiFigma,
	SiJava,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
} from 'react-icons/si';
import Astronaut from '../public/astronaut.png';
import { ProjectsNames } from './ProjectsNames';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? 'whiteStar text-white  dark transition-all' : ' blackStar transition-all'}>
			<main className='px-10'>
				<p className='absolute text-xs sm:right-[4vw] right-[16vw] sm:top-[9vh] top-[10vh] floating-0 dark:opacity-0 opacity-[0.15]'>
					White Space...
				</p>
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
								{/* Updated 22/04/2023 */}
							</li>
						</ul>
					</nav>
					<div className='text-center py-10 sm:p-10'>
						<h1 className='text-7xl sm:text-8xl py-2 floating-2'>FELIPE CARDOSO</h1>
						<h2 className='text-4xl py-2 floating-1'>Fullstack developer</h2>
						<p className='py-6 pText'>
							Estudante de programação na faculdade{' '}
							<a href='https://www.unisanta.br' target='_blank' rel='noreferrer' className='link'>
								Universidade Santa Cecília
							</a>{' '}
							do curso{' '}
							<a
								href='https://conteudo.unisanta.br/landing-page-tecnologo-analise-e-desenvolvimento-de-sistemas '
								target='_blank'
								rel='noreferrer'
								className='link'>
								Análise e Desenvolvimento de Sistemas
							</a>
							, com foco em <span className='text-pink-500'>desenvolvimento web e de software</span>. Estou em
							busca de novas <span className='text-pink-500'>experiências profissionais</span> e procurando
							melhorar minhas habilidades relacionadas a criação.
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-6'>
						<div className='floating-1'>
							<a href='https://www.linkedin.com/in/imlymei/' rel='noreferrer' target={'_blank'}>
								<AiFillLinkedin className='hover110' />
							</a>
						</div>
						<div className='floating-0'>
							<a href='https://github.com/imLymei' rel='noreferrer' target={'_blank'}>
								<AiFillGithub className='hover110' />
							</a>
						</div>
					</div>
					<div className='relative left-[-20%] sm:left-[-10%] h-[30vw] sm:h-[20vw] w-[60vw] sm:w-[45vw] my-10 astronaut'>
						<Image src={Astronaut} alt='Lymei draw' fill={true} sizes='60vw' priority />
					</div>
				</section>
				<section className='relative text-center min-h-screen'>
					<h2 className='text-4xl py-16 floating-0'>Skill Set</h2>
					<div className='grid grid-cols-1 x820:grid-cols-2 sm:p-16 gap-8 sm:gap-4'>
						<div className='skillCard floating-0 text-2xl'>
							<h3 className='py-2'>Linguagens</h3>
							<div className='md:text-3xl lg:text-4xl xl:text-5xl flex justify-center gap-[6%]'>
								<a
									href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
									target='_blank'
									rel='noreferrer'>
									<AiFillHtml5 className='hover110' />
								</a>
								<a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS' target='_blank' rel='noreferrer'>
									<IoLogoCss3 className='hover110' />
								</a>
								<a
									href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
									target='_blank'
									rel='noreferrer'>
									<IoLogoJavascript className='hover110' />
								</a>
								<a href='https://www.python.org' target='_blank' rel='noreferrer'>
									<IoLogoPython className='hover110' />
								</a>
								<a href='https://www.java.com' target='_blank' rel='noreferrer'>
									<SiCsharp className='hover110' />
								</a>
								<a href='https://www.java.com' target='_blank' rel='noreferrer'>
									<SiJava className='hover110' />
								</a>
							</div>
						</div>
						<div className='skillCard floating-1 text-2xl'>
							<h3 className='py-2'>Outros</h3>
							<div className='md:text-3xl lg:text-4xl xl:text-5xl flex justify-center gap-[3%]'>
								<a href='https://reactjs.org' target='_blank' rel='noreferrer'>
									<SiReact className='hover110' />
								</a>
								<a href='https://nextjs.org' target='_blank' rel='noreferrer'>
									<SiNextdotjs className='hover110' />
								</a>
								<a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
									<SiTailwindcss className='hover110' />
								</a>
								<a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
									<SiNodedotjs className='hover110' />
								</a>
								<a href='https://www.figma.com' target='_blank' rel='noreferrer'>
									<SiFigma className='hover110' />
								</a>
								<a href='https://www.mysql.com' target='_blank' rel='noreferrer'>
									<SiMysql className='hover110' />
								</a>
								<a href='https://www.mongodb.com' target='_blank' rel='noreferrer'>
									<SiMongodb className='hover110' />
								</a>
							</div>
						</div>
					</div>
					<h2 className='text-4xl mt-8 floating-1'>Portfolio</h2>
					<h3 className='mb-8 text-xs floating-0'>
						<span className='text-pink-500 select-none'>Grande Parte</span> dos meus{' '}
						<span className='link select-none'>códigos</span> estão em{' '}
						<span className='link select-none'>Inglês</span> por{' '}
						<span className='text-pink-500 select-none'>convenção</span>.
					</h3>
					<div className='max-sm:opacity-0 w-[5px] sm:h-[4800px] md:h-[4600px] lg:h-[4500px] xl:h-[4600px] absolute rounded-sm right-2 border border-black dark:border-white floating-3'>
						<div className='absolute bottom-0 translate-y-[120%] -translate-x-1/3 flex flex-col gap-4'>
							<div className='max-sm:opacity-0 w-[5px] h-8 opacity-75 relative rounded-sm border border-black dark:border-white floating-2'></div>
							<div className='max-sm:opacity-0 w-[5px] h-4 opacity-50 relative rounded-sm border border-black dark:border-white floating-1'></div>
							<div className='max-sm:opacity-0 w-[5px] h-2 opacity-25 relative rounded-sm border border-black dark:border-white floating-1'></div>
							<div className='max-sm:opacity-0 w-[5px] h-1 opacity-10 relative rounded-sm border border-black dark:border-white floating-0'></div>
						</div>
					</div>
					<div className='flex flex-col gap-12'>
						{ProjectsNames.map((e, index) => {
							if (e.isHomeScreen) {
								return (
									<div key={index}>
										<div className='max-sm:opacity-0 w-4 h-4 bg-black dark:bg-white rounded-lg flex justify-center items-center absolute right-2 floating-0'>
											<div className='w-2 h-2 dark:bg-black bg-white rounded-lg'></div>
											<h4 className='absolute right-0 w-[10vw] mr-6'>
												<span className='text-pink-500 select-none'>{e.date}</span>
											</h4>
										</div>
										<div className='p-6'>
											<h3 className=' text-2xl mx-auto'>
												<span className='text-pink-500'>{e.title}</span>
											</h3>
											<h4 className='sm:w-[50vw] sm:text-left mx-auto py-4 sm:px-4'>{e.description}</h4>
										</div>
										<div className='flex flex-col justify-start items-center'>
											<div className='hover105'>
												<div className={`portfolioCard floating-${Math.round((Math.random() * 10) % 3)}`}>
													<a className='cursor-pointer' href={`/portfolio/${e.name}`}>
														<Image src={e.image} alt={e.title} fill={true} />
													</a>
												</div>
											</div>
											<h2 className='text-center py-2'>{e.title}</h2>
											<div className='grid grid-flow-col justify-evenly gap-y-2 gap-x-[3vw] lg:gap-x-[4vw]'>
												{e.tags.map((e, index) => {
													return (
														<h3
															key={index}
															className={`cursor-default select-none border dark:border-white dark:bg-black/75 bg-white/75 border-black w-[max(6vw,100%)] px-2 flex justify-center items-center rounded-sm text-[max(0.75vw,10px)] ${
																index % 3 == 0
																	? `sm:col-[1]`
																	: index % 3 == 1
																	? 'sm:col-[2]'
																	: index % 3 == 2
																	? 'sm:col-[3]'
																	: ''
															} ${index % 2 == 0 ? `col-[1]` : index % 3 == 1 ? 'col-[2]' : ''}`}>
															{e}
														</h3>
													);
												})}
											</div>
											<h4 className='p-6 sm:w-[50vw] text-center mx-auto text-sm link'>
												<span className='link'>{e.learning}</span>
											</h4>
											<div className='floating-0 pt-4'>
												<a
													href={e.github}
													className='flex flex-col items-center hover110'
													rel='noreferrer'
													target={'_blank'}>
													<AiFillGithub className='hover110 text-2xl' />
													<h4 className='text-xs'>Link do projeto</h4>
												</a>
											</div>
										</div>
									</div>
								);
							}
						})}
					</div>

					<div className='py-16'>
						<p className='pText p-6'>
							Clique no foguete para <span className='text-pink-500'>viajar</span> pelas minhas criações.
						</p>
						<div className='flex justify-center items-center floating-2 mb-2'>
							<Link href='/portfolio'>
								<IoMdRocket className='cursor-pointer text-6xl rotate-45 dark:text-white hover110' />
							</Link>
						</div>
						<BsArrowUpRight className='text-2xl mx-auto dark:text-white floating-0' />
						<p className='pText p-6'>
							Caso queira ver <span className='text-pink-500'>todos os meus projetos</span>, acesse meu{' '}
							<a href='https://github.com/imLymei' target='_blank' rel='noreferrer' className='link'>
								Github
							</a>
							!
						</p>
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
