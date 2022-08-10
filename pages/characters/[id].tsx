import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Character } from '../../components/types';
import imageLoader from '../../components/imageLoader';
import React from 'react';

const characterPage: React.FC<{ character: Character }> = ({ character }) => {
    let episodes = character.episode.map((em) => {
        let e = Number(em.replace(/\D/g, ''));
        if (e <= 11) {
            return 'T1 E' + e;
        } else if (e <= 21) {
            return 'T2 E' + (e - 11);
        } else if (e <= 31) {
            return 'T3 E' + (e - 21);
        } else if (e <= 41) {
            return 'T4 E' + (e - 31);
        } else {
            return 'T5 E' + (e - 41);
        }
    });
    if (episodes.length === 51) {
        episodes = ['This character appears in all the episodes (51)'];
    } else if (episodes.length > 5) {
        episodes = [
            'This character appears in ' + episodes.length + ' episodes',
        ];
    } else if (episodes.length === 1) {
        episodes = [
            'This character only appears in the episode ' + episodes[0],
        ];
    }

    return (
        <div className={styles.details}>
            <Head>
                <title>{character.name}</title>
                <meta name='description' content={character.name} />
                <link rel='icon' href='/rick.ico' />
            </Head>
            <div className={styles.details_info}>
                <div>
                    <h2>Name</h2>
                    <p>{character.name}</p>
                    <h2>Gender</h2>
                    <p>{character.gender}</p>
                    <h2>Specie</h2>
                    <p>{character.species}</p>
                </div>
                <div>
                    <h2>Origin</h2>
                    <p>{character.origin.name}</p>
                    <h2>Location</h2>
                    <p>{character.location.name}</p>
                    <h2>Episodes</h2>
                    <p>{episodes.toString()}</p>
                </div>
            </div>
            <div className={styles.image}>
                <Image
                    unoptimized
                    loader={imageLoader}
                    src={character.image}
                    width='300px'
                    height='300px'
                    alt={character.name}
                />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${context.query.id}`
    );

    const char: Character = await res.json();

    return {
        props: {
            character: char,
        },
    };
};

export default characterPage;
