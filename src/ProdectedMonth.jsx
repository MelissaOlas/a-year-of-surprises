import { Navigate } from "react-router-dom";

const MONTH_MAP = {
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
  january: 1,
  february: 2,
};

function ProtectedMonth({ month, children }) {
  const today = new Date("2027-04-01");
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const isUnlocked =
    currentYear > 2026 ||
    (currentYear === 2026 && currentMonth >= MONTH_MAP[month]);

  return isUnlocked ? children : <Navigate to="/home" />;
}

export default ProtectedMonth;
