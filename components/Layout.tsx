import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Provider } from './store/myContext';
import Morty from './svgs/Morty';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider>
            <div className={styles.navigation}>
                <nav>
                    <Link href={'/'}>
                        <a>
                            <h3>Home</h3>
                        </a>
                    </Link>
                    <div>
                        <Morty />
                    </div>
                </nav>
                {children}
            </div>
        </Provider>
    );
};

export default Layout;
