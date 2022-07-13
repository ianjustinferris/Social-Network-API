const userName = [
  'user1',
  'user2',
  'user3',
  'user4',
  'user5',
  'user6',
  'user7',
  'user8',
  'user9',
  'user10',

];

const userEmail = [
  'user1@gmail.com',
  'user2@gmail.com',
  'user3@gmail.com',
  'user4@gmail.com',
  'user5@gmail.com',
  'user6@gmail.com',
  'user7@gmail.com',
  'user8@gmail.com',
  'user9@gmail.com',
  'user10@gmail.com',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  `${getRandomArrItem(userName)}`;

// Get a random user Email
const getRandomEmail = () => {
  `${getRandomArrItem(userEmail)}`
}

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail };
