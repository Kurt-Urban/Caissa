import React, { createContext, FC, useReducer, ReactNode } from "react";

const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8"].reverse();

const concatGridSpots = (arr1: any[], arr2: any[]) =>
  arr1.flatMap((item1) => arr2.map((item2) => `${item2}${item1}`));

const boardMap = concatGridSpots(numberArray, letterArray);

const boardState = boardMap.reduce((acc, current) => {
  acc[current] = "";
  return acc;
}, {});

interface GameBoardState {
  boardState: {};
  boardMap: string[];
}

const BoardReducer = (
  state: GameBoardState,
  action: { type: string; payload: any }
): GameBoardState => {
  // switch (action.type) {
  //   case "TOGGLE_DARK_MODE":
  //     return {
  //       ...state,
  //       darkModeEnabled: !state.darkModeEnabled,
  //     };
  //   default:
  //     return state;
  // }
  return state;
};

const initialState: GameBoardState = {
  boardState,
  boardMap,
};

export const BoardContext = createContext(initialState);

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  function toggleDarkMode() {
    dispatch({
      type: "TOGGLE_DARK_MODE",
      payload: null,
    });
  }

  return (
    <BoardContext.Provider
      value={{
        boardState: state.boardState,
        boardMap: state.boardMap,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
