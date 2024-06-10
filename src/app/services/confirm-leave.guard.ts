import { CanDeactivateFn } from '@angular/router';

export const confirmLeaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  let response = confirm("Are you sure want to leave this page")
  if(!response){
    return false
  }
  return true;
};
