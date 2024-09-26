import { useContext } from "react";
import { ActionType, AppContext } from "../App";

export const FavouriteCoffeeInput = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Component must be used within an AppContext.Provider");
  }

  const { state, dispatch } = context;

  return (
    <input
      value={state.favouriteCoffee}
      onChange={(e) =>
        dispatch({
          type: ActionType.UPDATE_FAVOURITE_COFFEE,
          payload: e.target.value,
        })
      }
      placeholder="Favourite Coffee"
    />
  );
};



