import  { useEffect, useState } from "react";

const useAuth = () => {

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const parseUser = () => {
      try {
        const userString = localStorage.getItem("user");
        if (userString) {
          const userObject = JSON.parse(userString);
          setUser(userObject);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (!user?.email) {
      parseUser();
    }
  }, []);

  const logoutUser = () => {
    setUser(null)
    localStorage.clear()
  }
  return {user, logoutUser};
};

export default useAuth;
