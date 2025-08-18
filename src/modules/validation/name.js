export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return { valid: false, error: "Введите ФИО" };
  }

  const trimmed = name.trim();

  const nameParts = trimmed.split(/\s+/);
  if (nameParts.length < 2) {
    return { valid: false, error: "Введите как минимум имя и фамилию" };
  }

  const nameRegex = /^[а-яёa-z\s\-']+$/i;
  if (!nameRegex.test(trimmed)) {
    return { valid: false, error: "ФИО может содержать только буквы, пробелы, дефисы" };
  }

  return { valid: true, value: trimmed };
};