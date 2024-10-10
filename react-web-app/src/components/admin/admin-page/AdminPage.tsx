import { Outlet } from "react-router-dom";
import './AdminStyles.css';


export default function AdminPage() {
    return (
        <div className="admin-page">
            <h1>Welcome to Your Dashboard</h1>
            <Outlet />
        </div>
    );
}
