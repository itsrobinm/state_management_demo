import { createContext, useReducer } from "react";
import "./App.css";
import { FirstNameInputWrapper } from "./components/FirstNameInputWrapper";
import { TimesVisitedPretCounterWrapper } from "./components/TimesVisitedPretCounterWrapper";
import { LastNameInputWrapper } from "./components/LastNameInputWrapper";
import { FavouriteCoffeeInputWrapper } from "./components/FavouriteCoffeeInputWrapper";

interface StateType {
  firstName: string;
  lastName: string;
  timesVisitedPret: number;
  favouriteCoffee: string;
}

interface AppContextType {
  state: StateType;
  dispatch: React.Dispatch<Action>;
}
export const AppContext = createContext<AppContextType | null>(null);

export enum ActionType {
  UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER",
  UPDATE_FAVOURITE_COFFEE = "UPDATE_FAVOURITE_COFFEE",
}

interface Action {
  type: ActionType;
  payload: string;
}

function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    case ActionType.UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ActionType.INCREMENT_COUNTER:
      return { ...state, timesVisitedPret: state.timesVisitedPret + 1 };
    case ActionType.DECREMENT_COUNTER:
      return { ...state, timesVisitedPret: state.timesVisitedPret - 1 };
    case ActionType.UPDATE_FAVOURITE_COFFEE:
      return { ...state, favouriteCoffee: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    timesVisitedPret: 0,
    favouriteCoffee: "",
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <FirstNameInputWrapper />
        <LastNameInputWrapper />
        <TimesVisitedPretCounterWrapper
        />
        <FavouriteCoffeeInputWrapper
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
