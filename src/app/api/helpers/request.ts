export async function request<T>(
  url: string,
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD',
  body?: BodyInit_
): Promise<T> {
  try {
    const response = await fetch(url, { body, method })
    return (await response.json()) as T
  } catch (error) {
    throw new Error(error)
  }
}
