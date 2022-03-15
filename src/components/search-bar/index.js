import React from 'react';
import '../../styles/search-bar.styles.css';

const SearchBar = ({json, setJson, setSelectedNode}) => {
    return (
        <div className="bar-container">
            <input className="bar" placeholder='Search Node' onChange={(e) => setJson(setQuery(e.target.value, json, setSelectedNode))}></input>
        </div>
    )
}

const setQuery = (query, json, setSelectedNode) => {
    changeSelectedNode(json, query, setSelectedNode);
    return json;    
}

const changeSelectedNode = (json, query, setSelectedNode) => {
    if (json) {
        if (json.children) {
            json.children.forEach(child => changeSelectedNode(child, query, setSelectedNode));
            json.isSelected = query?.toLowerCase() === json?.name?.toLowerCase();
            if (json.isSelected) {
                setSelectedNode({ name: json.name, depth: json.depth});
            }
        } else {
            json.isSelected = query?.toLowerCase() === json?.name?.toLowerCase();
            if (json.isSelected) {
                setSelectedNode({ name: json.name, depth: json.depth});
            }
        }
    }
}

export default SearchBar;