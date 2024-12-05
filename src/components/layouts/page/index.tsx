import React, { PropsWithChildren, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

interface IPage {
  pageStyle: string;
}

function Page({pageStyle, children}: PropsWithChildren<IPage>) {
  const { parentRef } = useOutletContext<{ parentRef: React.RefObject<HTMLDivElement> }>();
  
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