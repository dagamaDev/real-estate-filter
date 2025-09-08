import axios from "axios"

export async function getRandomImages(count = 12): Promise<string[]> {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        count,
        query: "apartment interior",
        client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }
    })

    return response.data.map((item: any) => item.urls.small)
  } catch (error) {
    console.error("Ошибка при загрузке картинок:", error)
    return []
  }
}
