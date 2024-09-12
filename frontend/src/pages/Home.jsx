import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Selamat Datang di Toko-Ku
        </Heading>
        <Text fontSize="xl" mb={6}>
          Temukan produk berkualitas dengan harga terbaik!
        </Text>
        <Button as={RouterLink} to="/products" colorScheme="blue" size="lg">
          Lihat Produk Kami
        </Button>
      </Box>

      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <Feature
          icon="🛒"
          title="Belanja Mudah"
          text="Nikmati pengalaman berbelanja yang mudah dan nyaman dari rumah Anda."
        />
        <Feature
          icon="🚚"
          title="Pengiriman Cepat"
          text="Kami menjamin pengiriman cepat ke seluruh wilayah Indonesia."
        />
        <Feature
          icon="💯"
          title="Kualitas Terjamin"
          text="Semua produk kami dijamin kualitasnya dan asli 100%."
        />
      </SimpleGrid>
    </VStack>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <VStack>
      <Box fontSize="5xl" mb={4}>
        {icon}
      </Box>
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        {title}
      </Text>
      <Text textAlign="center">{text}</Text>
    </VStack>
  );
};

export default Home;
