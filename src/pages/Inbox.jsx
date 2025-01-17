import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Inbox = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications] = useState([
    { id: 1, text: "Notification 1" },
    { id: 2, text: "Notification 2" },
    { id: 3, text: "Notification 3" },
  ]);

  return (
    <main className="relative flex home-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow p-4 content ${isSidebarOpen ? "pl-72" : "pl-16"}`}
      >
        <div className="container px-4 py-16 mx-auto">
          <div>
            <h2>Inbox</h2>
            <ul className="mb-2">
              {notifications.map((notification) => (
                <li key={notification.id} className="flex items-center">
                  <span className="ml-2 leading-loose">
                    {notification.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inbox;
