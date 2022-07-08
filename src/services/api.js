export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  const queryUrl = 'https://api.mercadolibre.com/sites/MLB/search?'

  if (categoryId && query) {
    url = `${queryUrl}category=${categoryId}&q=${query}`;
  } else if (!query) {
    url = `${queryUrl}category=${categoryId}`;
  } else if (!categoryId) {
    url = `${queryUrl}q=${query}`;
  } 
  
  const response = await fetch(url);
  const result = await response.json();
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  return result;
}
