export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return { valid: false, error: "Введите email" };
  }

  const trimmed = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: "Некорректный email" };
  }

  return { valid: true, value: trimmed };
};