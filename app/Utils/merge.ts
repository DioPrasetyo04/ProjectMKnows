export const formatTime = (date: Date | string | number) => {
  const d = new Date(date);

  const hours = d.getHours();
  const minutes = d.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const formatDateLabel = (date: Date | string | number) => {
  const today = new Date();
  const messageDate = new Date(date);

  const todayMidNight = new Date(today.setHours(0, 0, 0, 0));
  const messageDateMidNight = new Date(messageDate.setHours(0, 0, 0, 0));

  const diffDays =
    Math.floor(todayMidNight.getTime() - messageDateMidNight.getTime()) /
    (1000 * 60 * 60 * 24);

  if (diffDays === 0) {
    return "Today";
  }

  if (diffDays === 1) {
    return "Yesterday";
  }

  return messageDate.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
