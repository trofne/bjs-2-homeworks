"use strict";

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
}


"use strict";

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((user) => user.gender === gender);
  if (filteredUsers.length === 0) {
    return 0;
  }
  const sumAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  return +(sumAge / filteredUsers.length).toFixed(1);
}

