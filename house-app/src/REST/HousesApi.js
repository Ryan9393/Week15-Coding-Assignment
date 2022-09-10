const HOUSES_ENDPOINT = 'https://mockapi.io/projects/631cf0b44fa7d3264cb9b79a';

class HousesApi {
    get = async () => {
        try{
            const response = await fetch(HOUSES_ENDPOINT);
            const data = await response.json();
            return data;
        } catch(e){
            console.log('FetchHouses Issue', e);
        }
    }

    put = async (house) => {
        try {
            const response = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await response.json();
        } catch(e){
            console.log('Updating Houses Issue', e);
        }
    }
}

export const HousesApi = new HousesApi();