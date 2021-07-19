import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/rings.module.scss';


export default function ({rings}: any){    
    const router = useRouter();
    const id = router.query.id;

    return (
        <div className={styles.rings}>
            <MainContainer>
                <h3>Крылья - {id}</h3>
                <p>{rings.name}</p>
            </MainContainer>
        </div>
    );
}

export async function getServerSideProps(context: any){
    const id = context.query.id;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    let rings = (await resp.json()).find((el: any) => el.id == id);
    rings = {
        id: rings.id,
        name: rings.title
    };
    return {
        props: {
            rings
        }
    }
}