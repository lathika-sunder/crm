import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from 'react';

function Pagebreadcrumb({page}) {
 

  return (
    
      <Breadcrumb className='mt-3' >
        <Breadcrumb.Item href="#" >
        <div className='breadcrumb-non'>Home</div>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{page}
        </Breadcrumb.Item>
      </Breadcrumb>
    
  );
}

export default Pagebreadcrumb;
