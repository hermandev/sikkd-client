import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          UMGO
        </a>
        <span className="ml-1">
          &copy; {new Date().getFullYear()} 
        </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://umgo.ac.id/" target="_blank" rel="noopener noreferrer">
          UMGO
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
