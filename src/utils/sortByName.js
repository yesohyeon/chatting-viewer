export const sortByName = (list, mode) => {
  const ascendedList = list.slice().sort((friendA, friendB) => {
    return friendA.name.localeCompare(friendB.name);
  });

  return mode === "Ascending" ? ascendedList : ascendedList.reverse();
};
