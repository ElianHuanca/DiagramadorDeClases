import { loginNodeJs,registerNodeJs } from "../../helpers/authHelper";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (nombre, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startCreatingUserNodeJs = ({
    nombre,
    password
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const user = await registerNodeJs(nombre, password);
        if (!user.nombre) {
            return dispatch(logout());
        }
        localStorage.setItem(
            "user",
            JSON.stringify({ id: user.id, nombre: user.nombre })
        );
        return dispatch(login({ id: user.id, nombre: user.nombre }));
    };
};

export const startLoginNodeJs = ({ nombre, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const user = await loginNodeJs(nombre, password);
        if (!user.id) {
            return dispatch(logout());
        }
        localStorage.setItem(
            "user",
            JSON.stringify({ id: user.id, nombre: user.nombre })
        );
        return dispatch(login({ id: user.id, nombre: user.nombre }));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem("user");
        dispatch(logout());
    };
};
