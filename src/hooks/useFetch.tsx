export const useFetch = async (
  url: string,
  method: string = 'GET',
  data: object | null = null
) => {
  try {
    let body

    if (data) {
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
      },
      body,
    })

    return await response.json()
  } catch (e) {
    console.log(e)
  }
}
