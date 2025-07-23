import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import LogoutButton from "./LogoutButton";

export default function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span>Olá, {user.email}</span>
      <LogoutButton />
    </div>
  );
}
