import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import { Character, GetCharactersResults } from '../components/types';
import imageLoader from '../components/imageLoader';

const characterPage: NextPage<{ character: Character }> = ({ character }) => {
    return (
        <div className={styles.main}>
            <Head>
                <title>{character.name}</title>
                <meta
                    name='description'
                    content={character.name}
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h2>Name</h2>
            <p>{character.name}</p>
            <h2>Gender</h2>
            <p>{character.gender}</p>
            <h2>Specie</h2>
            <p>{character.species}</p>
            <h2>Location</h2>
            <p>{character.location.name}</p>
            <Image
                unoptimized
                loader={imageLoader}
                src={character.image}
                width='200px'
                height='200px'
            />
        </div>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/`);
    const { results }: GetCharactersResults = await res.json();
    return {
        paths: results.map((e) => {
            return {
                params: { id: String(e.id) },
            };
        }),
    };
};

export const getStaticProps = async ({
    params,
}: {
    params: { id: string };
}) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
    );

    const char: Character = await res.json();

    return {
        props: {
            character: char,
        },
    };
};

export default characterPage;
