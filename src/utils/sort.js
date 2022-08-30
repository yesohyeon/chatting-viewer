export function sortByName(list, mode) {
  const ascendedList = list.slice().sort((friendA, friendB) => {
    return friendA.name.localeCompare(friendB.name);
  });

  return mode === "Ascending" ? ascendedList : ascendedList.reverse();
}

export function sortByDate(chatroomList, comments) {
  return chatroomList.sort((roomA, roomB) => {
    const latestMessageIdA = roomA.comments[roomA.comments.length - 1];
    const latestMessageIdB = roomB.comments[roomB.comments.length - 1];
    const messageDateA = comments[latestMessageIdA].createdAt;
    const messageDateB = comments[latestMessageIdB].createdAt;

    return new Date(messageDateB) - new Date(messageDateA);
  });
}
