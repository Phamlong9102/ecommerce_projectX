import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value); 

    useEffect(() => {
        const handleDelay = setTimeout(() => setDebounceValue(value), delay); 

        return () => clearTimeout(handleDelay)
    }, [value])

    return debounceValue; 
}

export default useDebounce; 