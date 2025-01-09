import * as Notifications from "expo-notifications";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface NotificationContextType {
  expoPushToken: string | null;
  notification: Notifications.Notification | null;
  setNotification: Dispatch<SetStateAction<Notifications.Notification | null>>;
}

const defaultValue: NotificationContextType = {
  expoPushToken: null,
  notification: null,
  setNotification: () => {},
};

const NotificationContext =
  createContext<NotificationContextType>(defaultValue);

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
  const [notification, setNotification] =
    useState<Notifications.Notification | null>(null);

  console.log("[DEBUG] 푸시 알림 토큰: ", expoPushToken);

  useEffect(() => {
    // 푸시 알림 권한 요청 및 토큰 발급 함수
    const registerForPushNotificationsAsync = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      console.log("[DEBUG] 푸시 알림 권한 상태: ", status);
      if (status !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        console.log("[DEBUG] 푸시 알림 권한 요청: ", status);
        if (status !== "granted") {
          console.log("[DEBUG] 푸시 알림 권한이 없습니다.");
          return;
        }
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("[DEBUG] 푸시 알림 토큰: ", token);
      setExpoPushToken(token);
    };

    // 앱 실행 시 푸시 알림 권한 요청 및 토큰 발급
    registerForPushNotificationsAsync();

    // 푸시 알림 수신 이벤트 리스너
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
    };
  }, []);

  return (
    <NotificationContext.Provider
      value={{ expoPushToken, notification, setNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
