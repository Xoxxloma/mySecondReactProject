import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div>
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
      <span class="sr-only"></span>
      <br></br>
      Loading...
    </div>
  );
};

export default Spinner;
