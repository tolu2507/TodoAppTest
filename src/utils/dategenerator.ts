// Function to generate a random date and time from now forward
export const getRandomFutureDateTime = (maxDays = 30) => {
  const now = new Date();
  const maxMilliseconds = maxDays * 24 * 60 * 60 * 1000; // Convert max days to milliseconds
  const randomMilliseconds = Math.floor(Math.random() * maxMilliseconds);
  const randomDate = new Date(now.getTime() + randomMilliseconds);
  return randomDate;
};