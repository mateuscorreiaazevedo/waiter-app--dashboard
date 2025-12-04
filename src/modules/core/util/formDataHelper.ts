export class FormDataHelper {
  static toFormData<T extends object>(data: T): FormData {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        for (const item of value) {
          formData.append(`${key}[]`, String(item));
        }
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    }

    return formData;
  }
}
