import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID q3SBbAM0hcQ_5rj6JRv13GwswOv5tTbR6CqrHt-dHDg'
        },
        params: { 
            query: 'cars'
        }
    })

    console.log(response);
    return response;
};

export default searchImages;