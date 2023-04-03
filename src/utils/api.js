export const getData = async () => {
  return await fetch('/catalog.json')
    .then((response) => response.json())
    .then((data) => data)
}
