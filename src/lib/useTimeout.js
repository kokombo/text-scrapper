import { useEffect } from "react";

export const useTimeout = (setCustom) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setCustom("");
        }, 5000);

        return () => clearTimeout(timer);
    });
};
