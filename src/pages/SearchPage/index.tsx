import { useState } from 'react';

// Components
import SearchBar from '../../components/SearchBar';
import AnimeCard from '../../components/AnimeCard';

import image from '../../assets/images.jpeg'

const SearchPage = () => {
    const [input, setInput] = useState<string>('');
    return (
        <div>
            <SearchBar label="Search" input={input} setInput={setInput} fullWidth />
            <AnimeCard anime={{
                mal_id: 1,
                title: 'Naruto',
                images: {
                    jpg: {
                        image_url: image,
                    },
                },
                score: 8.5,
            }} />

        </div>
    );
}

export default SearchPage;
