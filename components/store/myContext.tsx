import { createContext, useState } from 'react';

interface AppContextInterface {
    char: string;
    page: number;
    setChar: (name:string) => void;
    setPage: (page:number) => void;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

// Provider in your app

export const Provider = ({children} : {children: any}) => {
    const [character, setCharacter] = useState('');
    const [pagination, setPagination] = useState(1);

    const charSetter = (name: string) => {
        setCharacter(name);
    };
    const PageSetter = (page: number) => {
        setPagination(page);
    };

    const info: AppContextInterface = {
        char: character,
        page: pagination,
        setChar: charSetter,
        setPage: PageSetter,
    };

    return <AppCtx.Provider value={info}>{children}</AppCtx.Provider>;
};
