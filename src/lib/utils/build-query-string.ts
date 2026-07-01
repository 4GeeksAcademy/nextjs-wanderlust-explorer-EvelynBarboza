export function buildQueryString(
	currentParams: URLSearchParams,
	key: string,
	value: string
) {
	const nextParams = new URLSearchParams(currentParams.toString());

	if (value.trim()) {
		nextParams.set(key, value);
	} else {
		nextParams.delete(key);
	}

	return nextParams.toString();
}
