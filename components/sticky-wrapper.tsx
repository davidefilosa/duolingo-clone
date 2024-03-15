import React from "react";

const StickyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden lg:block w-[360px] sticky self-end bottom-0">
      <div className="min-h-[calc(100vh-48px)] sticky top-0 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
