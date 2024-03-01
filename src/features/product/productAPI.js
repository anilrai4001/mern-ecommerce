// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // we will not hard code server url over here
    const response = await fetch('http://localhost:8080/products')
    const data = response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter,sort) {
  // filter = {"category":"smartphone"} -> old method
  // TODO : on server we will support multi values
  // filter = {"category" : ["smartphone","laptop"]}

  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
  
    const data = await response.json()
   
    resolve({data})
  }
  );
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    // we will not hard code server url over here
    const response = await fetch('http://localhost:8080/categories')
    const data = response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    // we will not hard code server url over here
    const response = await fetch('http://localhost:8080/brands')
    const data = response.json();
    resolve({ data });
  });
}