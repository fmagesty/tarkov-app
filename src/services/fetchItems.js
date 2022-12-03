const fetchItems = async (inputValue) => {
	const url = "https://api.tarkov.dev/graphql";
	const payload = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			query: `{
    items(name: "${inputValue}"), {
        id
        name
        shortName
    }
}`,
		}),
	};
	try {
		const response = await fetch(url, payload);
		const obj = await response.json();
		if (response.ok === true) {
			return {...obj, success: true};
		} else {
			return {...obj, success: false};
		}
	} catch (err) {
		console.log(`Request ${payload.method} ${url}`, payload);
		console.log(err);
		return {
			success: false,
			message: "Sorry, itemsData not found. Please check your internet connection",
		};
	}
};

export default fetchItems;
