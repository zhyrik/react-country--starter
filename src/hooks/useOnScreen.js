import { useState, useEffect } from 'react'

function useOnScreen(ref, rootMargin = "0px", threshold = 1) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false)
    
    useEffect(() => {
        const r = ref.current //! important save ref for destroy cleanup
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin,
                threshold
            },
        )
        // start observe
        if (r && !isIntersecting) { observer.observe(r) }
        //! cleanup after load content
        if(isIntersecting) { observer.unobserve(r) }
        // cleanup before destroy
        return () => { observer.unobserve(r) }

    }, [isIntersecting])

    return isIntersecting
}



export default useOnScreen