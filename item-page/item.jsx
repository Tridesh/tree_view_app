import React from "react";
import { useParams, useLocation } from "react-router-dom"; // Import hooks
import "./item.css";

//icons
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { MdCurrencyRupee } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";

const Item = () => {
    const { itemId } = useParams(); // Get itemId from the URL
    const location = useLocation(); // Get item details passed via state
    const item = location.state; // Retrieve the item object from the state

    return (
        <div className="item-page">
            <h1>Item Details</h1>
            <div className="items-wrap">
                <div className="left-side">
                    <div className="image">
                        <img src={item.image_url} alt={item.name} width={300}/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="name"><span className="icon"><MdOutlineDriveFileRenameOutline /></span>{item.name}</div>
                    <div className="quantity"><span className="icon"><MdProductionQuantityLimits /></span>{item.quantity}</div>
                    <div className="category"><span className="icon"><BiCategoryAlt /></span>{item.category}</div>
                    <div className="price"><span className="icon"><MdCurrencyRupee /></span>{item.price}</div>
                    <div className="status"><span className="icon"><MdOutlineEventAvailable /></span>{item.status}</div>
                    <div className="brand"><span className="icon"><TbBrandAirtable /></span>{item.brand}</div>
                </div>
            </div>     
            
            {/* You can add more fields as needed */}
        </div>
    );
};

export default Item;
