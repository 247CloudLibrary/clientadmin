import { useNavigate } from "react-router-dom";
import MainForm from "../components/MainForm";

const Main = () => {
  const navigate = useNavigate();
  const onBoards = () => {
    navigate("/boards");
  };
  const onBooks = () => {
    navigate("/books");
  };
  const onLending = () => {
    navigate("/lending");
  };
  const onProfile = () => {
    navigate("/profile");
  };
  const onBlackList = () => {
    navigate("/lending/blacklist");
  };
  const onRules = () => {
    navigate("/lending/libraries/rules");
  };
  const onSearchUser = () => {
    navigate("/auth");
  };
  const onLibraryList = () => {
    navigate("/libraries/list");
  };

  const props = {
    onBoards,
    onBooks,
    onLending,
    onProfile,
    onBlackList,
    onRules,
    onSearchUser,
    onLibraryList,
  };
  return <MainForm props={props} />;
};

export default Main;