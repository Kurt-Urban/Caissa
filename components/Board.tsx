import React, { FC } from "react";
import classNames from "classnames";
import useBoard from "@/hooks/useBoard";

const Board: FC = () => {
  const { boardMap } = useBoard();
  return (
    <div
      className="grid grid-cols-8 gap-0 border mx-auto"
      style={{ width: "85vh", height: "85vh" }}
    >
      {boardMap.map((n, i) => {
        return (
          <div
            className={classNames("m-0 border h-full", {
              "bg-slate-400": (i + Math.floor(i / 8)) % 2 === 0,
            })}
            key={n}
          >
            {n}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
