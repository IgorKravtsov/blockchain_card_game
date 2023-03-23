import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StateSchema } from "src/app/config/store/stateSchema";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
