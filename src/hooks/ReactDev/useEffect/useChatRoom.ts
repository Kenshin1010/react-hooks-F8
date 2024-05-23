import { useEffect } from "react";
import { ConnectionType, createConnection } from "./chat";

export function useChatRoom({ serverUrl, roomId }: ConnectionType) {
  // useEffect(setup, dependencies?)
  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
