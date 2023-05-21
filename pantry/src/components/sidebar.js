import '../styles/Sidebar.css';

export default function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='sidebar__menu-item-container'><h3 className="sidebar__menu-item">New Meal</h3></div>
            <h3 className="sidebar__menu-item">My Meals</h3>
            <h3 className="sidebar__menu-item">Grocery List</h3>
        </div>
    )
}
