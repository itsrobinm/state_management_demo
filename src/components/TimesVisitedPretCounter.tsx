import { useContext } from "react";
import { ActionType, AppContext } from "../App";

export const TimesVisitedPretCounter = () => {

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Component must be used within an AppContext.Provider");
  }
  
  const {state, dispatch} = context;


  return (
    <>
      <h4>
        Times Been To Pret <br />
        This Week: <br />
        {state.timesVisitedPret}
      </h4>
      <button className="minus-button" onClick={() =>  dispatch({type: ActionType.DECREMENT_COUNTER, payload: ""})  }>
        -
      </button>
      <button className="plus-button" onClick={() => dispatch({type: ActionType.INCREMENT_COUNTER, payload: ""})}>
        +
      </button>
    </>
  );
};
