
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Users/homePage";
import { ROUTERS } from "./Utils/router";
import MasterLayout from "./Pages/Users/theme/masterLayout";
import ProfilePage from "./Pages/Users/profilePage";

const RenderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        }
    ]


    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, key) => (<Route
                        key={key}
                        path={item.path}
                        element={item.component}

                    />))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return RenderUserRouter();
};

export default RouterCustom;