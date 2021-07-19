import { FC } from "react";
import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import styles from '../styles/A.module.scss';

interface IRing{
    id: number;
    name: string;
}

const Rings: FC<{rings: IRing[]}> = ({rings}) => {
    return (
        <div>
            <MainContainer title="Крылья">
                <h1>rings</h1>
                <ul>
                    {
                        rings.map(pair => (
                            <li key={pair.id}>
                                <Link href={`/rings/${pair.id}`}>
                                    <a className={styles.link}>{pair.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </MainContainer>
        </div>
    );
}

export default Rings;


export async function getStaticProps(context: any){
    const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
    let rings = await resp.json();
    rings = rings.map(({id, title}: any) => ({id, name: title}));
    return {
        props: {
            rings
        }
    }
}