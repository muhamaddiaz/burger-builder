import { createContext } from 'react'

const MakerContext = createContext({
    burger: [],
    cost: 0,
    pieces: 0
});

export default MakerContext