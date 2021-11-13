import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { error } from "src/slices/MessagesSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(error("Wrong network, please switch to mainnet"));
  }, []);

  return (
    <Box
      sx={{
        background: "black",
        minHeight: "100vh",
      }}
    ></Box>
  );
};

export default Home;
