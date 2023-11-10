import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer
} from "./directory-item.styles";

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigatehandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigatehandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
