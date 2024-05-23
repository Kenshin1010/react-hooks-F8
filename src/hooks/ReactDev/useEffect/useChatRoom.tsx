import { useEffect } from "react";
import { ConnectionType, createConnection } from "./chat.js";

export function useChatRoom({ serverUrl, roomId }: ConnectionType) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
