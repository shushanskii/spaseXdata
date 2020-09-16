export async function request<T>(
  url: string,
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD',
  requestBody?: unknown
): Promise<T> {
  try {
    const response = await fetch(url)
    return (await response.json()) as T
  } catch (error) {
    throw new Error(error)
  }
}
