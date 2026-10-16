import { useEffect, useState } from "react";

export function getPath() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const path = raw.split("?")[0].split("&")[0];
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/services#climate" ? "/services" : clean;
}

export function NavLink({ to, className = "", children, onClick }) {
  return (
    <a href={`#${to}`} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function useRoute() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onChange = () => {
      setPath(getPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onChange);
    if (!window.location.hash) window.location.hash = "/";
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path.replace(/#.*$/, "") || "/";
}
