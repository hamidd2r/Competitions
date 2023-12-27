"use client"
import React, { useEffect } from 'react';

const BootstrapCom = () => {
  useEffect(() => {
    if(typeof window !=="undefined"){

        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div>
      {/* Your JSX content goes here */}
    </div>
  );
};

export default BootstrapCom;
