import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  console.log(" i am dashboard app");
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
