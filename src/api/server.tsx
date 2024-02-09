import { Req } from "./axios"


export const getToken = async () => {
    try {
        const token = await Req.post('identity-server/connect/token',
            {
                grant_type: 'client_credentials',
                client_id: 'secretaria-saojoaquim:default',
                client_secret: 'hfklfdkwf7jbst5noszrcswezcb4xq7xs6uda2kilxqx',
                scope: 'squidex-api'
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        return token?.data?.access_token
    } catch (e) { console.log(e) }
}

export const Fetcher = async (QUERY: any) => {
    try {
        const token = await getToken();

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }

        const response = await Req.post(
            'api/content/secretaria-saojoaquim/graphql',
            { query: QUERY },
            {
                headers
            }
        ).then(res => res);
        return response?.data?.data

    } catch (error) {
        console.error('Error fetching GraphQL data:', error);
        throw error;
    }
};