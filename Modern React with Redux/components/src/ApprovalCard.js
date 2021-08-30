import React from 'react';

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui  green button">Approve</div>
          <div className="ui red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
