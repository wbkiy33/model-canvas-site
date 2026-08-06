import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

type Status = "checking" | "ok" | "error";

export default function App() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ error }) => setStatus(error ? "error" : "ok"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <main className="page">
      <h1>New Project</h1>
      <p>Clean starter. Nothing built yet.</p>
      <p className={`status status-${status}`}>
        Supabase: {status === "checking" ? "checking…" : status === "ok" ? "connected" : "connection error"}
      </p>
    </main>
  );
}
