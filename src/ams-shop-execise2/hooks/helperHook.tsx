import { useEffect, useState } from "react";

export function loadEffect(action:any,deps?: React.DependencyList | undefined) {
    const [isLoading, setIsLoading] = useState(false);
        
    useEffect(() => {
        async function load() {
            setIsLoading(true);
            action();
            setIsLoading(false);
        }

        load();
    }, deps);

    return {isLoading};
}