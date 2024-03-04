import React, { useState } from 'react'
import Admin_Revenue from './Admin_route/Store/Admin_Revenue';
import Admin_Orders from './Admin_route/Store/Admin_Orders';
import Admin_Game_list from './Admin_route/Game/Admin_Game_list';
import Admin_Add_game from './Admin_route/Game/Admin_Add_game';
import Admin_Update_game from './Admin_route/Game/Admin_Update_game';
import Admin_Delete_game from './Admin_route/Game/Admin_Delete_game';
// import Admin_Add_admin from './Admin_route/User/Admin_Add_admin';
import Admin_Add_user from './Admin_route/User/Admin_Add_user';
import Admin_Admin_list from './Admin_route/User/Admin_Admin_list';
import Admin_User_list from './Admin_route/User/Admin_User_list';
// import Admin_Delete_admin from './Admin_route/User/Admin_Delete_admin';
import Admin_Delete_user from './Admin_route/User/Admin_Delete_user';
import Admin_Update_admin from './Admin_route/User/Admin_Update_admin';
import Admin_Update_user from './Admin_route/User/Admin_Update_User';
import Admin_Publisher_list from './Admin_route/Publisher/Admin_Publisher_list';
import Admin_Add_publisher from './Admin_route/Publisher/Admin_Add_publisher';
import Admin_Update_publisher from './Admin_route/Publisher/Admin_Update_publisher';
import Admin_Delete_publisher from './Admin_route/Publisher/Admin_Delete_publisher';
import Admin_Category_list from './Admin_route/Category/Admin_Category_list';
import Admin_Add_category from './Admin_route/Category/Admin_Add_category';
import Admin_Update_category from './Admin_route/Category/Admin_Update_category';
import Admin_Delete_category from './Admin_route/Category/Admin_Delete_category';

const Home_admin = () => {
    const [activeLabel, setActiveLabel] = useState(null);

    const toggleSubList = (label) => {
        setActiveLabel(activeLabel === label ? null:label)
    }

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    }

    return (
        <div className="admin">
            <div className="admin-menu">
                <div className="menu-line"></div>

                <div className="label" onClick={() => toggleSubList("Store")}>
                    <div className="admin-menu-title">Store</div>                                    
                </div>
                <div className={`sub-list ${activeLabel === "Store" ? "active":""}`}>
                    <div className={`admin-menu-element ${activeItem === <Admin_Revenue /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Revenue />)}>
                        Information
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Orders /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Orders />)}>
                        Orders
                    </div>
                </div>

                <div className="label" onClick={() => toggleSubList("Game")}>
                    <div className="admin-menu-title">Game</div>                                    
                </div>
                <div className={`sub-list ${activeLabel === "Game" ? "active":""}`}>
                    <div className={`admin-menu-element ${activeItem === <Admin_Game_list /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Game_list />)}>
                        Game list
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Add_game /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Add_game />)}>
                        Add game
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Update_game /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Update_game />)}>
                        Update game
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Delete_game /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Delete_game />)}>
                        Delete game
                    </div>
                </div>

                <div className="label" onClick={() => toggleSubList("User")}>
                    <div className="admin-menu-title">User</div>                    
                </div>
                <div className={`sub-list ${activeLabel === "User" ? "active":""}`}>
                    <div className={`admin-menu-element ${activeItem === <Admin_Admin_list /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Admin_list />)}>
                        Admin list
                    </div>
                    {/* <div className={`admin-menu-element ${activeItem === <Admin_Add_admin /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Add_admin />)}>
                        Add admin
                    </div> */}
                    <div className={`admin-menu-element ${activeItem === <Admin_Update_admin /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Update_admin />)}>
                        Update admin
                    </div>
                    {/* <div className={`admin-menu-element ${activeItem === <Admin_Delete_admin /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Delete_admin />)}>
                        Delete admin
                    </div> */}
                    <div className={`admin-menu-element ${activeItem === <Admin_User_list /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_User_list />)}>
                        User list
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Add_user /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Add_user />)}>
                        Add user
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Update_user /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Update_user />)}>
                        Update user
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Delete_user /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Delete_user />)}>
                        Delete user
                    </div>
                </div>

                <div className="label" onClick={() => toggleSubList("Publisher")}>
                    <div className="admin-menu-title">Publisher</div> 
                </div>
                <div className={`sub-list ${activeLabel === "Publisher" ? "active":""}`}>
                    <div className={`admin-menu-element ${activeItem === <Admin_Publisher_list /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Publisher_list />)}>
                        Publisher list
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Add_publisher /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Add_publisher />)}>
                        Add publisher
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Update_publisher /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Update_publisher />)}>
                        Update publisher
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Delete_publisher /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Delete_publisher />)}>
                        Delete publisher
                    </div>
                </div>

                <div className="label" onClick={() => toggleSubList("Category")}>
                    <div className="admin-menu-title">Category</div>     
                </div>
                <div className={`sub-list ${activeLabel === "Category" ? "active":""}`}>
                    <div className={`admin-menu-element ${activeItem === <Admin_Category_list /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Category_list />)}>
                        Category list
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Add_category /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Add_category />)}>
                        Add category
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Update_category /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Update_category />)}>
                        Update category
                    </div>
                    <div className={`admin-menu-element ${activeItem === <Admin_Delete_category /> ? "element-active":""}`} onClick={() => handleItemClick(<Admin_Delete_category />)}>
                        Delete category
                    </div>
                </div>
            </div>

            <div className="admin-content">
                {activeItem ?
                    (<div className="admin-content-inner">
                        <div className="">{activeItem}</div>
                    </div>)
                    : (<div className="admin-content-placeholder">
                        <p>Select an item from the menu to view its content.</p>
                    </div>)
                }
            </div>
        </div>        
    )
}

export default Home_admin