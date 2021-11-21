import {useEffect} from "react";

const useClickOutside = (ref, setIsNavCollapsed) => {
    useEffect(() => {
        /**
         * Toggle collapse if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsNavCollapsed(true)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useClickOutside