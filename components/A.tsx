import Link from "next/link";
import styles from '../styles/A.module.scss';

export default function ({value, href}: {[key: string]: string}){
    return (
        <Link href={href}>
            <a className={styles.link}>{value}</a>
        </Link>
    );
}