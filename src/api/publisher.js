import { useEffect } from 'react';
const importScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kite.trade/publisher.js?v=3";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceUrl]);
};
export default importScript;