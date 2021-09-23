const SERVER_URL = process.env.REACT_APP_API_URL

const get = async (endpoint: string) => {
    const response = await fetch(`${SERVER_URL}${endpoint}`);
    if (response.status === 200) {
        return response.json();
    }
    return false;
}

export { get }