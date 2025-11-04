import axios, { AxiosResponse } from 'axios'

interface User {
  id: number
  name: string
  email: string
}

const apiClient = axios.create({
  baseURL: 'https://frontendcodingtest-production.up.railway.app/api/products/{1}',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await apiClient.get('/product')
  return response.data
}
