import React from "react";

export const Spinner = () => {
  return (
    <div className="flex items-center w-full justify-center py-3">
      <div className="w-8 h-8 border-2 border-red-600 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};
