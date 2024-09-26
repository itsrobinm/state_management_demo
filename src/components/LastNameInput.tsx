import { useContext } from "react";
import { ActionType, AppContext } from "../App";

export const LastNameInput = () => {

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Component must be used within an AppContext.Provider");
  }
  
  const {state, dispatch} = context;
    return (
      <input
        value={state.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({type: ActionType.UPDATE_FIRST_NAME, payload: e.target.value})
        } 
        placeholder="Last Name"
      />
    );
  };
  