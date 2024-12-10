import axios from 'axios'

export async function getPrismicCenterImage(imageTitle: string): Promise<PrismicImage | null> {
  const prismicRepositoryName = process?.env?.prismic_repository ?? ''
  const repositoryToken = process?.env?.prismic_auth_key ?? ''
  const urlBase = 'https://asset-api.prismic.io/assets'
  const url = new URL(urlBase)
  //https://asset-api.prismic.io/assets?assetType=image&limit=10&keyword=mini-me
  url.searchParams.append('assetType', 'image')
  url.searchParams.append('limit', '10')
  url.searchParams.append('keyword', imageTitle+".jpg")
  try {
    if (prismicRepositoryName.length > 0 && repositoryToken?.length > 0) {
      const results = await axios
        .get(url.toString(), {
          headers: {
            Authorization: `Bearer ${repositoryToken}`,
            repository: prismicRepositoryName
          }
        })
        .then((results) => {
          if (results.status == 200) {
            return results.data?.items
          }
        })

      let image: PrismicImage
      if (results && Array.isArray(results) && results.length > 0) {
        image = results.find((image) => image.filename == imageTitle+".jpg")
        return image
      }
    }
  } catch (e) {
    console.error(e)
  }
  return null
}