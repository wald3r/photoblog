import axios from 'axios'

const baseUrl = '/api/blogs'

const getBlogEntries = async () => {
    const response = await axios.get(`${baseUrl}`)
    return response;
}


export default { getBlogEntries }