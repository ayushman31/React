import Rescard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <Rescard
            key={restraunt.card.card.info.id}
            resData={restraunt.card.card.info}
          />
        ))}
        {/* <Rescard resData = {resList[0].card.card.info} /> //instead of writing this big code we can use map method as above.
                <Rescard resData = {resList[1].card.card.info} />
                <Rescard resData = {resList[2].card.card.info} />
                <Rescard resData = {resList[3].card.card.info} />
                <Rescard resData = {resList[4].card.card.info} />
                <Rescard resData = {resList[5].card.card.info} />
                <Rescard resData = {resList[6].card.card.info} /> */}
      </div>
    </div>
  );
};

export default Body;
