interface Info{
	url: RequestInfo
	method: string
	
}
export function store(namespace:string, data:string) {
	if (data) { 
	  return localStorage.setItem(namespace, JSON.stringify(data));
	}
	const store = localStorage.getItem(namespace);
	return (store && JSON.parse(store)) || [];
}

export async function getFetch(url: RequestInfo) {
    const response = await fetch(url,{
      method: 'PUT',
    })
  }