const getTime = () => {
  const timestamp = new Date();
  const hour = timestamp.getHours();
  const minutes = ('0' + timestamp.getMinutes()).slice(-2);
  const seconds = timestamp.getSeconds();

  return { hour, minutes, seconds };
};

const getDate = () => {
  const timestamp = new Date();
  const month = timestamp.getMonth();
  const date = timestamp.getDate();
  const dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const day = dayArr[timestamp.getDay()];

  return { month, date, day };
};

export { getTime, getDate };
