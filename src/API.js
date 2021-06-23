export const fetchData = async () => {
  const endpoint = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=c9c13d7e677f4cd1accb20977809370b`
  const data = await (await fetch(endpoint)).json()
  console.log(data);
}