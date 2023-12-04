import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center !w-full h-[100vh]">
      <Calendar
        calendarType="gregory"
        className="!w-[400px] h-![300px]  !border-none"
        locale="US"
        view="month"
      />
    </div>
  );
}
