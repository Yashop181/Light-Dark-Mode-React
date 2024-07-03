// Import necessary functions and hooks from React and Redux libraries
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// Import actions from the preferences slice
import { setTheme, setLanguage, toggleNotification } from "./preferencesSlice";

const Preferences = () => {
    // Access the current preferences state using the useSelector hook
    // Destructure the state to get theme, language, and notifications values
    const { theme, language, notifications } = useSelector((state) => state.preferences);

    // Create a dispatch function using the useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to handle theme changes
    // Dispatches the setTheme action with the selected value as payload
    const handleThemeChange = (e) => {
        dispatch(setTheme(e.target.value));
    };

    // Function to handle language changes
    // Dispatches the setLanguage action with the selected value as payload
    const handleLanguageChange = (e) => {
        dispatch(setLanguage(e.target.value));
    };

    // Function to toggle notifications
    // Dispatches the toggleNotification action
    const handleToggleNotification = () => {
        dispatch(toggleNotification());
    };

    // useEffect hook to update the body class based on the selected theme
    // This effect runs whenever the theme value changes
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <h1>User Preferences</h1>
            <div>
                <label>Theme:</label>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div>
                <label>Language:</label>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={notifications} onChange={handleToggleNotification} />
                    Enable Notifications
                </label>
            </div>
        </>
    );
};

export default Preferences;
