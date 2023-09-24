import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { useState } from "react";

import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SessionProvider session={session}>
      <div className={`app ${darkMode ? "bg-black" : ""}`}>
        <Component
          {...pageProps}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
