import SanityClient  from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: '9kpqhr5y',
    dataset: 'production',
    apiVersion : '2023-07-16',
    useCdn: true,
    token: 'skbb80zQXmIrawKF41FgoIj7Q2cYDbi9wWsws66nBBKmtyWguDOHjT9NfUyiD4zPEEFIVPvveZXCQVEPtUIPGodXutI2EzCbs5xkd4o0Rfb9hQUruph5agZHUDwlCxKqbojL9UdRAbhkVExvCEQZNx8Z2iZlHG3KVfnLrMPd8iUpsXuDsqsC'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);