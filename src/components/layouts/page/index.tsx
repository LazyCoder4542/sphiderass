import React, { PropsWithChildren, useEffect, useLayoutEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

interface IPage {
  pageStyle: string;
  showFooter?: boolean;
}

function Page({pageStyle, showFooter, children}: PropsWithChildren<IPage>) {
  const { parentRef, setShowFooter } = useOutletContext<{ parentRef: React.RefObject<HTMLDivElement>, setShowFooter: React.Dispatch<React.SetStateAction<boolean>> }>();
  useLayoutEffect(() => {
    if (showFooter === false) {
      setShowFooter(false)
    }
    else setShowFooter(true)
  }, [])
  useEffect(() => {
    if (parentRef.current && pageStyle) {
      parentRef.current.classList.add(pageStyle); // Change background color
    }
    return () => {
      (parentRef.current && pageStyle) && parentRef.current.classList.remove(pageStyle);
    }
  }, [parentRef]);
  return children;
}

export default Page;