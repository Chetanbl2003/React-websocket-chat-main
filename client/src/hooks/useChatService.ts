import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  name: string;
  text: string;
}

const useChatService = (
  initialMessage: Message,
  setUsers: (users: string[]) => void
): [
  Message[],
  (name: string, text: string) => void,
  (name: string) => void,
  string[] 
] => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [users, setUsersState] = useState<string[]>([]); 
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io("http://localhost:3001");

    socketRef.current.on("broadcast", (payload: Message) => {
      setMessages((prevMessages) => [...prevMessages, payload]);
    });

    socketRef.current.on("updateUserList", (userList: string[]) => {
      setUsers(userList);
      setUsersState(userList); 
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [setUsers]);

  const sendMessage = (name: string, text: string) => {
    const chatMessage: Message = { name, text };
    socketRef.current?.emit("send", chatMessage);
    setMessages((prevMessages) => [...prevMessages, chatMessage]);
  };

  const connect = (name: string) => {
    socketRef.current?.emit("enter", name);
  };

  return [messages, sendMessage, connect, users]; 
};

export default useChatService;
