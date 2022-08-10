import { createContext, useState } from 'react';

interface AppContextInterface {
    load: boolean;
    setLoad: (load:boolean) => void;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app

export const Provider = ({children} : {children: any}) => {
    const [loading, setLoading] = useState(false);

    const loadingSetter = (bool : boolean) => {
        setLoading(bool);
    };

    const info: AppContextInterface = {
        load: loading,
        setLoad: loadingSetter,
    };

    return <AppCtx.Provider value={info}>{children}</AppCtx.Provider>;
};
