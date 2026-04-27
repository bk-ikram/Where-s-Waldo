export default function formatMilliseconds(ms) {
    if(!ms)
        return "00:00.00";
  // Extract units
  const milliseconds = ms % 1000;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  // Format with leading zeros
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  const msFormatted = String(milliseconds).padStart(2, '0');

  return `${m}:${s}.${msFormatted}`;
}