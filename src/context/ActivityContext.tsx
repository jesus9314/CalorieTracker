import { Dispatch, ReactNode, createContext, useReducer } from "react";
import {
  ActivityActions,
  ActivityState,
  activityReducer,
  initialState,
} from "../reducers/activityReducer";

type ActivityContextProps = {
  state: ActivityState;
  dispatch: Dispatch<ActivityActions>;
};

type ActivityProviderProps = {
  children: ReactNode;
};

export const ActivityContext = createContext<ActivityContextProps>(
  {} as ActivityContextProps
);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};
