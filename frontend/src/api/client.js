import axios from 'axios'

export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'

const client = axios.create({ baseURL: API_BASE, timeout: 8000 })

export const getCompanyProfile = () => client.get('/company/').then(r => r.data)
export const getServices = (category) =>
  client.get('/services/', { params: category ? { category } : {} }).then(r => r.data.results ?? r.data)
export const getIndustries = () => client.get('/industries/').then(r => r.data.results ?? r.data)
export const getMachines = () => client.get('/machines/').then(r => r.data.results ?? r.data)
export const getBrands = () => client.get('/brands/').then(r => r.data.results ?? r.data)
export const submitEnquiry = (payload) => client.post('/contact/', payload).then(r => r.data)

export default client
