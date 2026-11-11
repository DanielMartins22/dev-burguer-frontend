import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

if (!apiBaseUrl) {
    throw new Error(
        'VITE_API_URL não definida. Copie .env.example para .env e reinicie o Vite.',
    );
}

export const api = axios.create({
    baseURL: apiBaseUrl,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    config.headers.authorization = `Bearer ${token}`;

    return config;
});
