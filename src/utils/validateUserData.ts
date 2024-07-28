export const isValidEmail = (email: string) => {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

export const isValidName = (name: string): boolean => {
    return /^[A-Za-zА-Яа-яЁё]+$/.test(name);
};