const refinedChatTime = (time: string) => {
  const timeChunk = time.split('T')[1].split(':');
  const hour = Number(timeChunk[0]) > 12 ? `오후 ${Math.abs(Number(timeChunk[0]) - 12)}` : `오전 ${timeChunk[0]}`;
  const minute = timeChunk[1];
  const displayedTime = `${hour}:${minute}`;

  return displayedTime;
};

export default refinedChatTime;