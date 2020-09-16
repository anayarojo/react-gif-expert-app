import '@testing-library/jest-dom';

import { getGifs } from '../../api/giphy';

describe('Test for giphy api />', () => {
    
    test('Should get an array with 10 elements', async () => {

        const gifs = await getGifs('One Piece');
        expect(gifs.length).toBe(10);
    });

    test('Should get an array with 0 elements', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
