import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'
const MessageHistorycomp = ({ msg }) => {
 if( !msg) return null;

  return msg.map((row,i)=>(
    <div key={i} className='messageHistory mt-3'>
      <div className='send fot-weight-bold text-secondary'>
        <div className='sender'>{row.messageBy}</div>
        <div className='date'>{row.date}</div>
      </div>
      <div className='message'>{row.message}</div>
    </div>
  ));
};

MessageHistorycomp.propTypes = {
  msg: PropTypes.array.isRequired,
};

export default MessageHistorycomp;
