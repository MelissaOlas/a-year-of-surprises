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

export const isMonthUnlocked = (month) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  return (
    currentYear > 2026 ||
    (currentYear === 2026 && currentMonth >= MONTH_MAP[month])
  );
};

function ProtectedMonth({ month, children }) {
  return isMonthUnlocked(month) ? children : <Navigate to="/home" replace />;
}

export default ProtectedMonth;
