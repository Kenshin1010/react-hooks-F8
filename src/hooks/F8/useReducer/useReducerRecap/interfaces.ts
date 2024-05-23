import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";

export interface StateType {
  job: string;
  jobs: string[];
}

export type ReducerType = (state: StateType, action: ActionType) => StateType;

export interface SetJobAction {
  type: typeof SET_JOB;
  payload: string;
}

export interface AddJobAction {
  type: typeof ADD_JOB;
  payload: string;
}

export interface DeleteJobAction {
  type: typeof DELETE_JOB;
  payload: number;
}

export type ActionType = SetJobAction | AddJobAction | DeleteJobAction;
