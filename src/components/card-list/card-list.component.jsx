import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ cats }) => (
    <div className="card-list">
      {cats.map((cat) => {
        return <Card cat={cat} />;
      })}
    </div>
);

export default CardList;
