
import ArrowLeft from './svgs/arrowLeft';
import ArrowRight from './svgs/arrowRight';
import styles from '../styles/Home.module.css';
import React, {useContext} from 'react';
import { pages } from './types';
import { useRouter } from 'next/router';
import { AppCtx } from './store/myContext';

const Pagination: React.FC<pages> = ({ actualPage, total, name}) => {
    const next = Number(actualPage) + 1;
    const prev = Number(actualPage) - 1;
    const router = useRouter();
    const ctx = useContext(AppCtx);

    const nextPage = () => {
        ctx?.setLoad(true);
        router.push({
            pathname: `/pagination/${next}`,
            query: { page: next, char: name },
        });
    };
    const prevPage = () => {
        ctx?.setLoad(true);
        router.push({
            pathname: `/pagination/${prev}`,
            query: { page: prev, char: name },
        });
    };

    return (
        <div className={styles.pagination}>
            {Number(actualPage) - 1 !== 0 && (
                    <button onClick={prevPage}>
                        <ArrowLeft />
                    </button>
            )}
            {actualPage?.toString() !== total.toString() && (
                    <button onClick={nextPage}>
                        <ArrowRight />
                    </button>
            )}
            <p>
                Page {actualPage} of {total}
            </p>
        </div>
    );
};

export default Pagination;
