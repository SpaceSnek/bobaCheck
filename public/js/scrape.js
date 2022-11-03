import axios from ('axios');
import cheerio from ('cheerio');

function getBoba() {
	(async() => {
	const bobas = await getBobas()
	if (bobas[0] === 'Add to cart') {
		document.getElementById("stock").innerHTML = 'in stock! :>';
	} else {
		document.getElementById("stock").innerHTML = 'out of stock! :<';
	}
})
}

const getBobas = async () => {
	try {
		const { data } = await axios.get(
			`https://swagkeys.com/products/gazzew-u4t-boba-switches?variant=39880294596774`
		);
		const $ = cheerio.load(data);
		const bobas = [];
			
		$(".ProductForm__AddToCart").each((_idx, el) => {
			const boba = $(el).text()
			bobas.push(boba)
		});
		return bobas;
	} catch (error) {
		throw error;
	}
};
