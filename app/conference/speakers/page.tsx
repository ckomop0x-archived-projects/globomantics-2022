import Link from "next/link";

import styles from "../conference.module.css";



async function fetchSpeakers() {
    const response = await fetch(
        "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
        {
            next: {
                revalidate: 20
            }
        }
    );
    const data = await response.json();

    return data;
}


export default async function Page() {
    const data = await fetchSpeakers();

    return (
        <div className={styles.parentContainer}>
            <div>
                Last Rendered: {new Date().toLocaleTimeString()}
            </div>
            <h1>Welcome to Globomantics Speakers</h1>
            {data.speakers.map(({id, name, bio}: { id: string, name: string, bio: string }) => (
                <div key={id} className={styles.infoContainer}>
                    <Link
                        className={styles.bgLinks}
                        href={`/conference/speakers/${name}`}
                    >
                        <h3 className={styles.titleText}>{name}</h3>
                    </Link>
                    <h5 className={styles.descText}>{bio}</h5>
                </div>
            ))}
        </div>
    );
}
