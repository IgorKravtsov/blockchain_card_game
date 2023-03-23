import { useDispatch } from "react-redux";
import { AppDispatch } from "src/app/config/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
