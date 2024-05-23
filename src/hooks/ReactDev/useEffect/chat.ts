export interface RoomType {
  roomId: string;
}

export type ConnectionType = {
  serverUrl: string;
  roomId: RoomType;
};

export function createConnection({ serverUrl, roomId }: ConnectionType) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}
