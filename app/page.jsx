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
						<h2 className='text-3xl py-2 floating-1'>Fullstack developer</h2>
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
					<h2 className='text-3xl py-16 floating-0'>Skill Set</h2>
					<div className='grid grid-cols-1 x820:grid-cols-2 sm:p-16 gap-8 sm:gap-4'>
						<div className='skillCard floating-0'>
							<h3 className='text-2xl py-2'>Linguagens</h3>
							<div className='text-4xl md:text-5xl flex justify-center gap-[6%]'>
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
						<div className='skillCard floating-1'>
							<h3 className='text-2xl py-2'>Outros</h3>
							<div className='text-4xl md:text-5xl flex justify-center gap-[3%]'>
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
					<div className='py-16'>
						<h2 className='text-3xl mt-8 floating-1'>Portfolio</h2>
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
