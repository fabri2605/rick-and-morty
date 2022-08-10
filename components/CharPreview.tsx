import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import imageLoader from './imageLoader';
import React from 'react';
import { Character } from './types';

const CharPreview: React.FC<{ name: Character }> = ({ name }) => {
    const e = name;
    return (
        <div key={e.id} className={styles.character}>
            <Link href={`/characters/${e.id}`}>
                <a>
                    <h3>{e.name}</h3>
                </a>
            </Link>
            <Link href={`/characters/${e.id}`}>
                <Image
                    unoptimized
                    loader={imageLoader}
                    alt={e.name}
                    src={e.image}
                    width='200px'
                    height='200px'
                ></Image>
            </Link>
        </div>
    );
};

export default CharPreview;
