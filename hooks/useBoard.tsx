import { BoardContext } from "../context/BoardContext";
import { useContext } from "react";

const useBoard = () => useContext(BoardContext);

export default useBoard;
