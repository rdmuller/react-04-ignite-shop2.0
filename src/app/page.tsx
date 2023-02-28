import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";

interface HomeProps {
	products: {
		id: string;
		name: string;
		imageUrl: string;
		price: string;
	}[]
} 
 
export default async function Home(/*{ products }: HomeProps*/) {
	/*const response = await stripe.products.list({
		expand: ["data.default_price"],
	});

	const products: HomeProps = response.data.map(product => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],      
			price: new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price.unit_amount / 100),
		};
	});*/

	//console.log(products);

	return (
		<>
			<h1>Hello world</h1>
			<ul>
				{/*products.map((product) => {
					return (
						<li key={product.id}>{product.name}</li>
					);
				})*/}
			</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
//export async function getStaticProps(context) {
	console.log(">>>>>>> teste <<<<<<<<<<<<<");

	const response = await stripe.products.list({
		expand: ["data.default_price"]
	});

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],      
			price: new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price.unit_amount / 100),
		};
	});

	console.log(products);

	return {
		props: {
			products: products,
		},
		revalidate: 60 * 60 * 2, // a cada 2 horas gera uma nova pagina no server SSG
	};
};