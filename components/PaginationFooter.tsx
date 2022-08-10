
import ArrowLeft from './svgs/arrowLeft';
import ArrowRight from './svgs/arrowRight';
import styles from '../styles/Home.module.css';
import React from 'react';
import { pages } from './types';
import { useRouter } from 'next/router';

const Pagination: React.FC<pages> = ({ actualPage, total, name}) => {
    const next = Number(actualPage) + 1;
    const prev = Number(actualPage) - 1;
    const router = useRouter();

    const nextPage = () => {
        console.log(next);
        router.push({
            pathname: `/pagination/${next}`,
            query: { page: next, char: name },
        });
    };
    const prevPage = () => {
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
