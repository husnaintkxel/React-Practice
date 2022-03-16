import React, { useState, useEffect } from 'react';
import SearchBar from '../search-bar';
import '../../styles/directory.styles.css';
import TriangleDown from '../../assets/icons/Triangle-Down.svg';
import TriangleRight from '../../assets/icons/Triangle-Right.svg';
import Layers from '../../assets/icons/Layers.svg';


function validateJson(value) {
    try {
        const json = JSON.parse(value.toString());
        return json;
    } catch (error) {
        console.log('Invalid JSON')
        return false;
    }
}

let id;
let selectedNode;

const Directory = ({jsonVal, setSelectedNode}) => {
    let depth = 0;
    const validJson = validateJson(jsonVal);
    if (validJson) {
        validJson.isRoot = true;
    }
    const [ json, setJson ] = useState(validJson);
    id = 0;
    addLevelsInTree(validJson, depth);
    useEffect(() => {
        console.log('TREE UPDATED');
    })
    return(
        <div className="dir-container">
            <div className='search-tool'>
                <SearchBar json={json} setJson={setJson} setSelectedNode={setSelectedNode} />
            </div>
            <Tree node={json ? json : validJson} setJson={setJson} setSelectedNode={setSelectedNode} />      
        </div>
    )
}

const Tree = ({node, setJson, setSelectedNode}) => {
    const [isExpand, setExpand] = useState(true);
    return (
        <div>
            {node?.isRoot ? 
            <div className='root-icon-container'>
                <img 
                    src={Layers}
                    className='root-icon'
                    alt=''
                />
            </div>
            : node?.children?.length && (<img 
                className='icon'
                src={!isExpand ? TriangleRight : TriangleDown} 
                alt=''
                    onClick={() => setExpand(!isExpand)}
            />)}
                <span
                    key={node?.id}
                    className={!node?.isRoot ? 'nodes' : 'root-node'}
                    style={{paddingLeft: node?.children?.length ? '2.5vw' : '3vw'}}
                    onClick={() => setSelectedNode(nodeSelected(node?.name, node?.depth - 1))}
                >
                    <label className={node?.isSelected ? 'selected-node' : ''}>{node?.name}</label>
                </span>
            <div 
                className={isExpand ? 'nodes expand' : 'nodes collapse'}
                style={{
                    display: isExpand ? 'block' : 'none',
                    paddingLeft: '3vw',
                    paddingBottom: node?.children?.length ? `${2.5 * node?.children?.length}vh` : '0vh'
                }}
            >
                {node?.children?.map((child) => (
                    <Tree node={child} setJson={setJson} setSelectedNode={setSelectedNode} />
                ))}
            </div>
        </div>
    )
}


const addLevelsInTree = (tree, depth) => {
    if (tree.children) {
        depth++;
        tree.children.forEach(child => {
            tree.id = ++id;
            tree.depth = depth;
            tree.isSelected = false;
            addLevelsInTree(child, depth);
        });
    } else {
        if (tree) {
            depth++;
            tree.id = ++id;
            tree.depth = depth;
            tree.isSelected = false;
        }
    }
}

const nodeSelected = (name, depth) => {
    selectedNode = { name, depth };
    return selectedNode;
}

export default Directory;