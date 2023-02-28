import { useState } from "react";
import Data from "../../../data.json";

type ResultData = {
  category: string;
  score: number;
  icon: string;
};

const ResultSummary = () => {
  const [dataList, setDataList] = useState<ResultData[]>(Data);
  return (
    <div className=" max-w-lg md:grid md:max-w-3xl md:grid-cols-[1fr_1.5fr] md:rounded-3xl md:shadow-lg">
      <ResultSection />
      <SummarySection dataList={dataList} />
    </div>
  );
};

const ResultSection = () => (
  <div className=" flex flex-col items-center gap-4 rounded-b-3xl bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue py-6 px-14 text-center  md:rounded-3xl">
    <h2 className=" text-lightLavender">Your Result</h2>
    <div className=" flex aspect-square w-28 flex-col justify-center rounded-full bg-gradient-to-b from-violetBlue to-persianBlue text-center md:w-44">
      <p className=" text-5xl font-bold text-white">76</p>
      <p className=" text-lightLavender">of 100</p>
    </div>
    <p className=" text-fontSizeParagraph text-white">Great</p>
    <p className=" font-hankenGroteskFont text-lightLavender">
      You scored higher than 65% of the people who have taken these tests.
    </p>
  </div>
);

const SummarySection = ({ dataList }: { dataList: ResultData[] }) => (
  <div className=" px-8 py-4">
    <p className=" font-bold text-darkGrayBlue">Summary</p>
    <ul className=" flex flex-col gap-4 py-6">
      {dataList.map((item, index) => (
        <ScoreItem key={index} Item={item} />
      ))}
    </ul>
    <button className=" w-full rounded-full bg-darkGrayBlue py-3 text-white hover:bg-gradient-to-b hover:from-lightSlateBlue hover:to-lightRoyalBlue">
      Continue
    </button>
  </div>
);

const categoryColorList = {
  Reaction: {
    text: "text-lightRed",
    bg: "bg-lightRedBg",
  },
  Memory: {
    text: "text-orangeyYellow",
    bg: "bg-orangeyYellowBg",
  },
  Verbal: {
    text: "text-greenTeal",
    bg: "bg-greenTealBg",
  },
  Visual: {
    text: "text-cobaltBlue",
    bg: "bg-cobaltBlueBg",
  },
};

const ScoreItem = ({ Item }: { Item: ResultData }) => (
  <li
    className={` ${
      categoryColorList[Item.category as keyof typeof categoryColorList].bg
    } flex justify-between rounded-lg p-4`}
  >
    <div className=" flex items-end gap-2">
      <img src={getImageUrl(Item.icon)} alt="" />
      <p
        className={`${
          categoryColorList[Item.category as keyof typeof categoryColorList]
            .text
        } font-bold`}
      >
        {Item.category}
      </p>
    </div>
    <div className=" flex items-end gap-2">
      <p className=" font-bold text-darkGrayBlue">{Item.score}</p>
      <p className=" font-bold text-lightLavender">/ 100</p>
    </div>
  </li>
);

function getImageUrl(name: string) {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
}

export default ResultSummary;
