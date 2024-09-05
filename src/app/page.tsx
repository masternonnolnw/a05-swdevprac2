import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <div className="grid grid-cols-3 gap-4 max-w-[1500px] mx-auto">
        <Card hospitalName="Chulalongkorn Hospital" imgSrc="/chula.jpg" />
        <Card hospitalName="Rajavithi Hospital" imgSrc="/rajavithi.jpg" />
        <Card
          hospitalName="Thammasat University Hospital"
          imgSrc="/thammasat.jpg"
        />
      </div>
    </div>
  );
}
