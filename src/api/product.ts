import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}

export const updateProduct = (id:string|undefined, data:any) => {
    const url = "/products"
    return instance.put(`/products/${id}`, data)
}

export const getProduct = (id: string|undefined) =>{
    const url = "/products"
    return instance.get(`/products/${id}`)
}

export const deleteProduct = (id: string|undefined) =>{
    const url = "/products"
    return instance.delete(`/products/${id}`)
}