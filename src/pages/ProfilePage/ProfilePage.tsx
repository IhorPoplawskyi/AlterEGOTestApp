import { FC } from "react";
import { signOut } from "../../store/profilePageSlice";
import { useAppDispatch } from "../../store/store";

export const ProfilePage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div style={{ width: "80%", height: "80vh", background: "yellow" }}>
        abobus
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => dispatch(signOut())}>
        Logout
      </div>
    </>
  );
};
