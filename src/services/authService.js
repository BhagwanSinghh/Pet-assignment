export const isAuthenticated = () => {
    return !!localStorage.getItem('authUser');
};

export const login = (email, password) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && btoa(password) === storedPassword) {
        localStorage.setItem('authUser', JSON.stringify({ email }));
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('authUser');
};

