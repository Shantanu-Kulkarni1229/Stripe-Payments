import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import PaymentLink from "./PaymentLink";

enum PopularPlanType {
	NO = 0,
	YES = 1,
}

interface PricingProps {
	title: string;
	popular: PopularPlanType;
	price: number;
	description: string;
	buttonText: string;
	benefitList: string[];
	href: string;
	billing: string;
	paymentLink?: string;
}

const pricingList: PricingProps[] = [
	{
		title: "Free",
		popular: 0,
		price: 0,
		description: "deal for startups and small projects looking to test payment integration with essential features.",
		buttonText: "Get Started",
		benefitList: ["Basic payment processing", "Monthly transaction limit: $500", "Standard customer support", "No setup fees"],
		href: "/api/auth/login",
		billing: "/month",
	},
	{
		title: "Premium",
		popular: 1,
		price: 1000,
		description: "Perfect for growing businesses needing advanced payment features and better transaction limits.",
		buttonText: "Buy Now",
		benefitList: ["Advanced payment processing", "Monthly transaction limit: $5,000", "Priority customer support", "Customizable payment options", "Access to analytics dashboard"],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_MONTHLY_PLAN_LINK,
		billing: "/month",
	},
	{
		title: "Enterprise",
		popular: 0,
		price: 9999,
		description:  "Best for large enterprises requiring scalable, secure, and customized payment solutions.",
		buttonText: "Buy Now",
		benefitList: ["Unlimited transactions", "Dedicated account manager", "Tailored payment solutions", "Enterprise-grade security", "24/7 technical support"],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_YEARLY_PLAN_LINK,
		billing: "/year",
	},
];

export const Pricing = () => {
	return (
		<section id='pricing' className='container py-24 sm:py-32'>
			<h2 className='text-3xl md:text-4xl font-bold text-center'>
				Get
				<span className='bg-gradient-to-b from-[#667EEA] to-[#764BA2] uppercase text-transparent bg-clip-text'>
					{" "}
					Unlimited{" "}
				</span>
				Access
			</h2>
			<h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis.
			</h3>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={
							pricing.popular === PopularPlanType.YES
								? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
								: ""
						}
					>
						<CardHeader>
							<CardTitle className='flex item-center justify-between'>
								{pricing.title}
								{pricing.popular === PopularPlanType.YES ? (
									<Badge variant='secondary' className='text-sm text-primary'>
										Most popular
									</Badge>
								) : null}
							</CardTitle>
							<div>
								<span className='text-3xl font-bold'>${pricing.price}</span>
								<span className='text-muted-foreground'> {pricing.billing}</span>
							</div>

							<CardDescription>{pricing.description}</CardDescription>
						</CardHeader>

						<CardContent>
							<PaymentLink
								href={pricing.href}
								text={pricing.buttonText}
								paymentLink={pricing.paymentLink}
							/>
						</CardContent>

						<hr className='w-4/5 m-auto mb-4' />

						<CardFooter className='flex'>
							<div className='space-y-4'>
								{pricing.benefitList.map((benefit: string) => (
									<span key={benefit} className='flex'>
										<Check className='text-purple-500' /> <h3 className='ml-2'>{benefit}</h3>
									</span>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
