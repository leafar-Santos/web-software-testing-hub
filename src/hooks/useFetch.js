import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // Refatorando Post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // Loading
    const [loading, setLoading] = useState(false);

    // Tratando erros
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    useEffect(() => {
        // Buscando dados
        const fetchData = async () => {
            
            // Executando loading
            setLoading(true);

            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError("Houve algum erro ao carregar os dados");
                console.log(error);
            }

            // Fechando loading
            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                const res = await fetch(url, config);
                const json = await res.json();

                setCallFetch(json);
            }
        };

        if (config) {
            httpRequest();
        }
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};
