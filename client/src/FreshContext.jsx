import React, { createContext, useContext, useState, useEffect } from "react";

const FreshContext = createContext();

const socket = new WebSocket("ws://localhost:5000"); //TODO: env variables
let handlers = [];
socket.onmessage = (event) => {
  const body = JSON.parse(event.data);
  console.log('Socket message received.')
  console.log(body);
  handlers.forEach((h) => h(body));
};
socket.onopen = function(event) {
  let message = {type: "refresh"};
  socket.send(JSON.stringify(message));
};

const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({});
  const actions = {
    refresh() {
      socket.send(JSON.stringify({ type: "refresh" }));
    },
  };
  useEffect(() => {
    handlers.push(setSessionData);
    return () => {
      handlers = handlers.filter((h) => h !== setSessionData);
    };
  }, []);
  return (
    <FreshContext.Provider value={{ sessionData, actions }}>
      {children}
    </FreshContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(FreshContext);
  if (context === undefined) {
    throw new Error("useSessions must be called within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };