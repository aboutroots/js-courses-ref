
                                  // oczekuje to obiektu
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,  // to obiekt JS, ze wszystkimi wartościami jakie chcę nadpisać
  }
};