export default httpClient => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.satus,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
})
