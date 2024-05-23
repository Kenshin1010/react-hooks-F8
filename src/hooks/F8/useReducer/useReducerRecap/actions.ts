import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants";
import { AddJobAction, DeleteJobAction, SetJobAction } from "./interfaces";

export const setJob = (payload: string): SetJobAction => {
  return {
    type: SET_JOB,
    payload,
  };
};

export const addJob = (payload: string): AddJobAction => {
  return {
    type: ADD_JOB,
    payload,
  };
};

export const deleteJob = (payload: number): DeleteJobAction => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
