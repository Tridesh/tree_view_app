import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Main.css";

import godowns from "../assets/godowns.json";
import itemss from "../assets/items.json"; 

import { FaStore } from "react-icons/fa"; 
import { FaFileArchive } from "react-icons/fa"; 

const Main = () => {
    const [expandedGodowns, setExpandedGodowns] = useState([]);
    const [expandedSubGodowns, setExpandedSubGodowns] = useState([]);
    const navigate = useNavigate(); // Use navigate for navigation

    const clickGodowns = (godown_id) => {   
        if (expandedGodowns.includes(godown_id)) {
            setExpandedGodowns(expandedGodowns.filter(id => id !== godown_id));
        } else {
            setExpandedGodowns([...expandedGodowns, godown_id]);
        }
    };

    const clickSubGodowns = (subgodown_id) => {
        if (expandedSubGodowns.includes(subgodown_id)) {
            setExpandedSubGodowns(expandedSubGodowns.filter(id => id !== subgodown_id));
        } else {
            setExpandedSubGodowns([...expandedSubGodowns, subgodown_id]);
        }
    };

    // Navigate to the Item component and pass item ID
    const clickItems = (item) => {
        navigate(`/item/${item.item_id}`, { state: item }); // Pass the item object in the state
    };

    return (
        <div className="main-page">
            <div className="tree-view-wrap">
                <div className="tree-view">
                    <div className="tree-view-text">Tree view application</div>
                    <div className="tree-view-body-godowns">
                        {godowns
                            .filter(godown => godown.parent_godown === null)
                            .map((godown) => (
                                <div className="tree-view-item-godowns" key={godown.id}>
                                    <div 
                                        className="tree-view-item-name1" 
                                        onClick={() => clickGodowns(godown.id)} 
                                    >
                                        <FaStore /> {godown.name}
                                    </div>
                                    {expandedGodowns.includes(godown.id) && (
                                        <div className="sub-godowns">
                                            {godowns
                                                .filter(subGodown => subGodown.parent_godown === godown.id)
                                                .map((subGodown) => (
                                                    <div className="tree-view-item-items" key={subGodown.id}>
                                                        <div 
                                                            className="tree-view-item-name2" 
                                                            onClick={() => clickSubGodowns(subGodown.id)} 
                                                        >
                                                            <FaStore /> {subGodown.name}
                                                        </div>
                                                        {expandedSubGodowns.includes(subGodown.id) && ( 
                                                            <div className="sub-items">
                                                                {itemss
                                                                    .filter(item => item.godown_id === subGodown.id) 
                                                                    .map((item) => (
                                                                        <div className="tree-view-item-items" key={item.item_id}>
                                                                            <div 
                                                                                className="tree-view-item-name3" 
                                                                                onClick={() => clickItems(item)} // Pass the whole item object
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
