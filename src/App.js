import PickUserName from "./Components/PickUserName/PickUserName";
import Container from "./Components/UI/Container/Container";
import Post from "./Components/Post/Post";
import { useSelector } from "react-redux";
import CommentsSection from "./Components/CommentsSection/CommentsSection";
function App() {
  const username = useSelector((state) => state.ui.username);

  return (
    <Container>
      {username !== "" && (
        <>
          {/* //components */}

          <Post />
          <CommentsSection />
        </>
      )}
      {username === "" && <PickUserName />}
    </Container>
  );
}

export default App;
