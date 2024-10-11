export const hostUrl : string = "https://apa-auto.ru/";

export const getPageContent =  async (slug : string) => await $fetch<ICar[]>(`${hostUrl}/wp-json/wp/v2/car?slug=${slug}&acf_format=standard&_embed=true`)