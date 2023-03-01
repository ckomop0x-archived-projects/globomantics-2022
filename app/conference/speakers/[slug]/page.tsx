import { speakerJson } from "../page";
import styles from "../../conference.module.css";

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

function fetchSpeakerInfo(speakersData, params) {
    // API call, DB Query, fetch from the app

    const speakerInfo = speakersData.speakers?.find(
        speaker => speaker.name === params.slug.split('%20').join(' ')
    );

    return speakerInfo;
}

export default async function Page({ params }) {
    const speakersData = await fetchSpeakers();
    const speakerInfo = fetchSpeakerInfo(speakersData, params);

    const { name, bio, sessions } = speakerInfo;

    return (
        <div className={styles.infoContainer}>
            <h3 className={styles.titleText}>{name}</h3>
            <h5 className={styles.descText}>About: {bio}</h5>
            {sessions &&
                sessions.map(({ name, id }) => (
                    <div key={id}>
                        <h5 className={styles.descText}>Session: {name}</h5>
                    </div>
                ))}
        </div>
    );
}
