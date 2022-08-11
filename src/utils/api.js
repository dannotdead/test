export const getData = (setStore, setIsLoading) => {
	fetch('/catalog.json')
		.then(response => response.json())
		.then(data => {
			setStore(data)
			setIsLoading(false)
		})
}