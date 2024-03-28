import "@/styles/globals.scss";
import { AppContext } from "@/store/appContext";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/user')
      .then(res => {
        if (res.status === 401) {
          return null
        }

        return res.json()
      })
      .then(user => {
        setUser(user)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <></>
  }

  return (
    <AppContext.Provider value={{
      user
    }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  )
}

export default App