import { children } from "react";

export default function Content({ children }) {
  return (
    <>
      <div className="container">
        {children}

      </div>
      <hr />
      <fooder>©2024 とことこ</fooder>
    </>
  )
}