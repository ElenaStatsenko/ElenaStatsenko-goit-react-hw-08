import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () =>{
    return(
        <div>
            <Navigation/>
            <AuthNav/>
            <UserMenu/>
        </div>
    )
}