// This is a simple caching mechanism to avoid exciding the API rate limits
// In a real cenario, would be better to use a more robut caching solution like Redis
const cache = new Map();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour in milliseconds
const MAX_CACHE_SIZE = 100; // To avoid memory bloat if a logt of unique names are queried

export async function load({ url }) {
	const name = url.searchParams.get('name');
	if (!name) {
		return {
			name: null,
			age: null,
			count: null
		};
	}

	if (cache.has(name)) {
		const cachedData = cache.get(name);
		const now = Date.now();

		// Move the last accessed iten to the end of the Map.
		cache.delete(name);
		cache.set(name, cachedData);

		if (now - cachedData.timestamp < CACHE_TTL) {
			return cachedData.data;
		} else {
			cache.delete(name);
		}
	}

	try {
		const res = await fetch(`https://api.agify.io?name=${name}`);
		if (res.ok) {
			const data = await res.json();

			if (cache.size >= MAX_CACHE_SIZE) {
				const leastUsedKey = cache.keys().next().value;
				cache.delete(leastUsedKey);
			}
			cache.set(name, {
				data: {
					name: data.name,
					age: data.age,
					count: data.count
				},
				timestamp: Date.now()
			});

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
