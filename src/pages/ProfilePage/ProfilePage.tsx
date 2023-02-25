import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../store/profilePageSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const ProfilePage: FC = (): JSX.Element => {
    const logged = useAppSelector(state => state.profilePageSlice.logged)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (logged === false) {
            navigate('/')
        }
    }, [logged, navigate])

    return (
        <>
            <div style={{width: '80%', height: '80vh', background: 'yellow'}}>abobus</div>
            <div style={{cursor: 'pointer'}} onClick={() => dispatch(signOut())}>Logout</div>
        </>
    )
}