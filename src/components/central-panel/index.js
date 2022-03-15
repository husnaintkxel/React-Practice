import React from 'react';
import '../../styles/editor.styles.css'

const CentralPanel = ({tree, setTree}) => {
    return (
        <div className='central-panel-container'>
            <span className='title'>Enter valid json below</span>
            <textarea className='editor' value={tree} onChange={(e) => setTree(e.target.value)} />
        </div>
    )
}

export default CentralPanel;