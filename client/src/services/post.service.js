import axios from "axios";

const POST_INSTANCE = axios.create({
    baseURL : 'http://localhost:8004/posts'
})

export const getPostById = async (id) => {
    try {
        const res = await POST_INSTANCE.get(`/${id}`)
        return res.data
    } catch(error) {throw error}
}

export const getAllPosts = async () => {
    try {
        const res = await POST_INSTANCE.get('/')
        return res.data
    } catch(error) {throw error}
}

export const createPost = async (postData) => {
    try {
        const res = await POST_INSTANCE.post('/', postData)
        return res.data
    } catch(error) {throw error}
}

export const updatePost = async (postData) => {
    try {
        const res = await POST_INSTANCE.put(`/${postData.id}`, postData)
        return res.data
    } catch(error) {throw error}
}

export const deletePost = async (id) => {
    try {
        const res = await POST_INSTANCE.delete(`/${id}`)
        return res.data
    } catch(error) {throw error}
}