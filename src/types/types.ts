export interface StateType {
  firstName: string;
  lastName: string;
  timesVisitedPret: number;
  favouriteCoffee: string;
}

export interface ActionType {
  type: string;
  payload: any;
}
