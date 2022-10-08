export const useStrapiData = async (path) => {
    const config = useRuntimeConfig()


    return await useFetch(`${config.STRAPI_URL}/api/${path}`)
  }

