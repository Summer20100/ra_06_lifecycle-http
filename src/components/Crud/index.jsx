import { useState, useEffect } from 'react'

export function Page({ url, status }) {
  const [dataPostApi, setDataPostApi] = useState([])

  function getApi(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error occurred!')
        }
        return response.json()
      })
      .then((data) => setDataPostApi(data))
      .catch((err) => {
        throw new Error('Какая то фигня с сервером')
      })
  }

  useEffect(() => {
    getApi(url)
  }, [status])

  // console.log(dataPost)

  // return dataPost

  return null
}


