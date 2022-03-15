import React from 'react';
import '../../styles/right-bar.styles.css';

const RightBar = ({ selectedNode }) => {
    return (
        <div className='right-container'>
            <span className="label">SELECTED NODE: <span className="value">{selectedNode?.name ? selectedNode.name : 'Not Selected'}</span></span>
            <span className="label">DEPTH: <span className="value">{selectedNode?.depth ? selectedNode.depth : 'Not Selected'}</span></span>
        </div>
    );
}

export default RightBar;