import axios from 'axios'
import useSWR from 'swr'

export const getByIdFetcher = (url: string) => axios.get(url).then((response) => response.data)

export const useInfoGetById = (id: string) => {
  const { data, error } = useSWR(`${process.env.PORTFOLIO_API_URL}/info/${id}`, getByIdFetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const useBlogsGetByInfoId = (infoId: string) => {
  const { data, error } = useSWR(`${process.env.PORTFOLIO_API_URL}/blogs/user/${infoId}`, getByIdFetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}

export const useBlogGetById = (id: string) => {
  const { data, error } = useSWR(`${process.env.PORTFOLIO_API_URL}/blogs/${id}`, getByIdFetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
