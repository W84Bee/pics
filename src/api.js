import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID q3SBbAM0hcQ_5rj6JRv13GwswOv5tTbR6CqrHt-dHDg'
        },
        params: { 
            query: term,
        }
    })

    return response.data.results;
};

export default searchImages;