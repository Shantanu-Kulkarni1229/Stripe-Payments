import Image from "next/image";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
	return (
		<div className='hero-section'>
			<section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 '>
				<div className='text-center lg:text-start space-y-6'>
					<main className='text-5xl md:text-6xl font-bold text-balance'>
						<h1 className='inline'>
							<span className='inline bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text'>
								Pay Verse
							</span>{" "}
							 by
						</h1>{" "}
						<h2 className='inline'>
							<span className='inline bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text'>
								Shantanu Kulkarni
							</span>{" "}
						</h2>
					</main>
					{/* <a href=''>
						<img src='https://made-with.prisma.io/dark.svg' width={220} height={130} alt='' />
					</a> */}

					<p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance'>
					PayVerse is a modern payment gateway template designed for seamless integration into any website. With a clean design and flexible pricing models, it serves as a ready-to-use foundation for developers and businesses looking to incorporate secure payment solutions into their platforms.					</p>

					<div className='space-y-4 md:space-y-0 md:space-x-4'>

						<a
							rel='noreferrer noopener'
							href='https://github.com/Shantanu-Kulkarni1229/Stripe-Payments.git'
							target='_blank'
							className={`w-full md:w-1/3 ${buttonVariants({
								variant: "outline",
							})}`}
						>
							Github Repository
							<GitHubLogoIcon className='ml-2 w-5 h-5' />
						</a>
					</div>
				</div>

				<div className='z-10'>
					<Image
						src='/hero.png'
						width={986}
						height={512}
						alt=''
						className='rounded-md select-none pointer-events-none'
					/>
				</div>
			</section>
		</div>
	);
};
