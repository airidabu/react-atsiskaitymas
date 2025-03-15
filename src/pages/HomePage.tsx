import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Box
                component="h1"
                sx={{
                    m: 0
                }}
            >
                Welcome to the Books Page
            </Box>
            <Box
                component="img"
                src="src/assets/smiley-face.png"
                alt="smiley face"
                sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: {xs: "100%", md: "80%"},
                    display: "block",
                    mx: "auto",
                }}
            />
        </Container>
    )
}

export default HomePage;