import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";

export const NotificationsContext = createContext();
export const SetNotificationsContext = createContext();

export const useNotifications = () => useContext(NotificationsContext);
export const useSetNotifications = () => useContext(SetNotificationsContext);

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const history = useHistory();

  // Fetch notifications on mount
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("/notifications/");
      setNotifications(data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      history.push("/error");
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  // Mark a notification as read
  const markAsRead = async (notificationId) => {
    try {
      await axiosReq.patch(`/notifications/${notificationId}/`, {
        isRead: true,
      });
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  // Delete a notification
  const deleteNotification = async (notificationId) => {
    try {
      await axiosReq.delete(`/notifications/${notificationId}/`);
      setNotifications((prevNotifications) =>
        prevNotifications.filter(
          (notification) => notification.id !== notificationId
        )
      );
    } catch (err) {
      console.error("Error deleting notification:", err);
    }
  };

  useMemo(() => {
    axiosReq.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          history.push("/signin");
        }
        return Promise.reject(error);
      }
    );
  }, [history]);

  return (
    <NotificationsContext.Provider value={notifications}>
      <SetNotificationsContext.Provider
        value={{ markAsRead, deleteNotification }}
      >
        {children}
      </SetNotificationsContext.Provider>
    </NotificationsContext.Provider>
  );
};
