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

export async function upLoad(url: RequestInfo) {
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + store("token", "")
      },
      body: JSON.stringify({
        message: "my commit",
        content: "aGVsbG8sd29ybGQ="
      }),
      mode: 'cors'
    })
    const result = await (async res => {
      if (res.status >= 200 && res.status < 400) {
        return {
          status: res.status,
          data: await res.json()
        }
      } else {
        return {
          status: res.status,
          data: null
        }
      }
    })(response).catch(e => e)
    if (result.status === 422) {
      alert("File already exists!")
      return
    }
    if (result.data) {
      console.log("success")
      return
    }
  }

export async function getFetch(url: RequestInfo) {
    const response = await fetch(url,{
      method: 'PUT',
    })
  }