import React, { useState } from "react"; 
import "./Main.css";

import godowns from "../assets/godowns.json"; // Ensure this has { id, name, parent_godown }
import itemss from "../assets/items.json"; // Ensure this has { name, parent_godown }

import { FaStore } from "react-icons/fa"; //<FaStore />
import { FaFileArchive } from "react-icons/fa"; //<FaFileArchive />

const Main = () => {
    // State to track which godowns are expanded
    const [expandedGodowns, setExpandedGodowns] = useState([]);
    const [expandedSubGodowns, setExpandedSubGodowns] = useState([]);

    // Function to handle clicking on a godown
    const clickGodowns = (godown_id) => {   
        if (expandedGodowns.includes(godown_id)) {
            // Collapse godown
            setExpandedGodowns(expandedGodowns.filter(id => id !== godown_id));
        } else {
            // Expand godown
            setExpandedGodowns([...expandedGodowns, godown_id]);
        }
    };

    // Function to handle clicking on a sub-godown
    const clickSubGodowns = (subgodown_id) => {
        if (expandedSubGodowns.includes(subgodown_id)) {
            // Collapse sub-godown
            setExpandedSubGodowns(expandedSubGodowns.filter(id => id !== subgodown_id));
        } else {
            // Expand sub-godown
            setExpandedSubGodowns([...expandedSubGodowns, subgodown_id]);
        }
    };

    // Function to handle clicking on an item
    const clickItems = (itemName) => {
        console.log(`Clicked on item: ${itemName}`);
    };

    return (
        <div className="main-page">
            <div className="tree-view-wrap">
                <div className="tree-view">
                    <div className="tree-view-text">Tree view application</div>
                    <div className="tree-view-body-godowns">
                        {godowns
                            .filter(godown => godown.parent_godown === null) // Only top-level godowns
                            .map((godown) => (
                                <div className="tree-view-item-godowns" key={godown.id}>
                                    <div 
                                        className="tree-view-item-name" 
                                        onClick={() => clickGodowns(godown.id)} 
                                    >
                                        <FaStore /> {godown.name}
                                    </div>
                                    {expandedGodowns.includes(godown.id) && ( // Display sub-godowns if expanded
                                        <div className="sub-godowns">
                                            {godowns
                                                .filter(subGodown => subGodown.parent_godown === godown.id) // Get sub-godowns
                                                .map((subGodown) => (
                                                    <div className="tree-view-item-items" key={subGodown.id}>
                                                        <div 
                                                            className="tree-view-item-name" 
                                                            onClick={() => clickSubGodowns(subGodown.id)} 
                                                        >
                                                            <FaStore /> {subGodown.name}
                                                        </div>
                                                        {expandedSubGodowns.includes(subGodown.id) && ( // Display sub-items if expanded
                                                            <div className="sub-items">
                                                                {itemss
                                                                    .filter(item => item.godown_id === subGodown.id) // Get items related to the sub-godown
                                                                    .map((item) => (
                                                                        <div className="tree-view-item-items" key={item.item_id}>
                                                                            <div 
                                                                                className="tree-view-item-name" 
                                                                                onClick={() => clickItems(item.name)} 
                                                                            >
                                                                                <FaFileArchive /> {item.name}
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
