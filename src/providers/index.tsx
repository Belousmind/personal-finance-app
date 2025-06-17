"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { initApp } from "@/store/initApp";
import { LazyMotion, domAnimation } from "framer-motion";

function InitAppEffect() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <InitAppEffect />
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </Provider>
  );
}
