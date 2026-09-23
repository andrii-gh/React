import { createContext, useContext, useState, useMemo } from 'react';

const AuthContext = createContext(null);

const decodeToken = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch {
        return null;
    }
};

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const user = useMemo(() => (token ? decodeToken(token) : null), [token]);

    const register = async (formData) => {
        const response = await fetch('https://frontend53.somee.com/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message || 'Помилка реєстрації');
        }

        return await login({ email: formData.email, password: formData.password });
    };

    const login = async (credentials) => {
        const response = await fetch('https://frontend53.somee.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();

        if (!data.success) {
            throw new Error(data.message || 'Помилка входу');
        }

        localStorage.setItem('token', data.payload);
        setToken(data.payload);
        return data;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}