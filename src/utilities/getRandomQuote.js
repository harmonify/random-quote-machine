export async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  
  return {
    author: data.author,
    content: data.content,
  };
}
