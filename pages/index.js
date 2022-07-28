import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    // How do we show the recently listed NFTs?
    // We will index the events off-chain and then read from our database.
    // Setup a server to listen for those events to be fired, and we will add them to a database to query.
    //But isn't this centralized? --> TThe Graph
    //Moralis do it in a centralized way
    return <div className={styles.container}>Hi</div>;
}
