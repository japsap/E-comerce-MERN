import { useEffect, useState } from 'react'

const useFetch = (url, stateCondition) => {

    const [ data, setData] = useState(stateCondition);
    const [ isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(res => {
              setData(res)
              setIsLoading(false)
            })
    }, [])

  return [
    data, setData,
    isLoading
  ]
}

export default useFetch