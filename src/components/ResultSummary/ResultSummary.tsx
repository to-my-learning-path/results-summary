import { useState } from "react";
import Data from "../../../data.json";

const ResultSummary = () => {
  const [dataList, setDataList] = useState(Data);
  return (
    <div>
      <div>
        <p>Your Result</p>
        <p>76 of 100</p>
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div>
        <p>Summary</p>
        <ul>
          {dataList.map((item, index) => (
            <ScoreItem key={index} Item={item} />
          ))}
        </ul>
        <button>Continue</button>
      </div>
    </div>
  );
};

type ScoreItemProp = {
  Item: {
    category: string;
    score: number;
    icon: string;
  };
};

const ScoreItem = ({ Item }: ScoreItemProp) => {
  return (
    <li>
      <div>
        <img src={getImageUrl(Item.icon)} alt="" />
        <p>{Item.category}</p>
      </div>
      <p>
        <span>{Item.score}</span> / 100
      </p>
    </li>
  );
};

function getImageUrl(name: string) {
  return new URL(name, import.meta.url).href;
}

export default ResultSummary;
