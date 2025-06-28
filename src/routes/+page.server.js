export async function load({ url }) {
	const name = url.searchParams.get('name');
	if (!name) {
		return {
			name: null,
			age: null,
			count: null
		};
	}

	try {
		const res = await fetch(`https://api.agify.io?name=${name}`);
		if (res.ok) {
			const data = await res.json();
			return {
				name: data.name,
				age: data.age,
				count: data.count
			};
		}
	} catch (e) {
		console.log(`Error fetching data for name "${name}":`, e);
	}

	return {
		name: name,
		age: null,
		count: null
	};
}
