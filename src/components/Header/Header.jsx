import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="bg-blue-500 p-5">
            <div className="max-w-355 mx-auto">
                <ul className="flex gap-4 font-bold text-white">
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;