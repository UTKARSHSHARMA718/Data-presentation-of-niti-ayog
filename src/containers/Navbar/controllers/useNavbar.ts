import { useNavigate } from "react-router-dom";

import { ABOUT, HOME } from "../../../constant/routeNames";

const useNavbar = () => {
  const navigate = useNavigate();

  const NAVBAR_ITEMS = [
    { label: "Home", onClick: () => navigate(HOME) },
    { label: "About", onClick: () => navigate("/"+ABOUT) },
  ];

  return { NAVBAR_ITEMS };
};

export default useNavbar;
