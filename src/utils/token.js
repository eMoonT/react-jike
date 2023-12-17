const TOKEN = "TOKEN"
const getToken = () => {
    return localStorage.getItem(TOKEN)
}
const setToken = (val) => {
    localStorage.setItem(TOKEN,val)
}

const removeToken = () => {
    localStorage.removeItem(TOKEN)
}

export { getToken, setToken, removeToken }