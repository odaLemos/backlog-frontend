import axios from "axios"

const api = axios.create({baseURL:"http://127.0.0.1:5000"})

export default function getBacklogList() {
    return api.get("/api/v1/backlog/")
}