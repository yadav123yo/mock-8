import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Button,
  Center,
  SimpleGrid,
  Select
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const navigat = useNavigate()

    let token = localStorage.getItem("user")
    if(!token){
        navigat("/signup")
    }
  const [movies, setMovies] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [genreFilter, setGenreFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");


  const [perPage] = useState(4);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get("https://odd-jade-cocoon-shoe.cyclic.app/movies");
      setMovies(res.data);
    };
    fetchMovies();
  }, []);



//   const sortedMovies = [...movies].sort(
//     (a, b) =>
//       (sortOrder === "asc" ? a.IMDB_Rating - b.IMDB_Rating : b.IMDB_Rating - a.IMDB_Rating)
//   );

//   const handleSorting = value => {
//     if (value === 'asc') {
//       const HightToLow = movies.sort((a, b) => {
//         return b.IMDB_Rating  - a.IMDB_Rating ;
//       });
//       setMovies([...HightToLow]);
//     } else {
//       const lowToHigh = movies.sort((a, b) => {
//         return a.IMDB_Rating  - b.IMDB_Rating ;
//       });
//       setMovies([...lowToHigh]);
//     }
//   };


  const last = currPage * perPage;
  const first = last - perPage;
  const curr = movies
  .filter((movie) => (genreFilter ? movie.genre === genreFilter : true))
  .slice(first, last);


  const pagination = (pageNumber) => setCurrPage(pageNumber);

  let arr = JSON.parse(localStorage.getItem("arr")) || []

  const handleBook = () =>{
    localStorage.setItem("arr",JSON.stringify(movies) )
  }
  
  


  return (
    <>   

       <Box mb={4}>
  <Text fontWeight="bold" mb={2}>
    Filter by genre:
  </Text>
  <Select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
    <option value="">All</option>
    <option value="Action">Action</option>
    <option value="Comedy">Comedy</option>
    <option value="Horror">Horror</option>
    <option value="Romance">Romance</option>
  </Select>
</Box>




     <Box m={4}>
      <SimpleGrid columns={4} spacing="40px">
        {curr.map((movie) => (
          <Box
            key={movie.id}
            bg="gray.200"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={movie.poster} alt={movie.title} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="sm" color="gray.500" mr={2}>
                  {movie.year}
                </Text>
                <Text fontWeight="semibold" fontSize="sm" color="gray.500">
                  {movie.genre}
                </Text>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {movie.title}
              </Box>

              <Box>
                <Text fontSize="sm" color="gray.500">
                  Director: {movie.director}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  IMDB Rating: {movie.IMDB_Rating}
                </Text>
              </Box>
              <Button onClick={handleBook} marginTop={10}>Book Now</Button>
            </Box>
           
          </Box>
        ))}
      </SimpleGrid>

      <Center mt={4}>
        <HStack>
          <IconButton
            size="sm"
            icon={<ChevronLeftIcon />}
            onClick={() => pagination(currPage - 1)}
            disabled={currPage === 1}
          />
          {Array.from({ length: Math.ceil(movies.length / perPage) }).map(
            (_, i) => (
              <Button
                key={i}
                size="sm"
                onClick={() => pagination(i + 1)}
                colorScheme={currPage === i + 1 ? "blue" : "gray"}
              >
                {i + 1}
              </Button>
            )
          )}
          <IconButton
            size="sm"
            icon={<ChevronRightIcon />}
            onClick={() => pagination(currPage + 1)}
            disabled={currPage === Math.ceil(movies.length / perPage)}
          />
        </HStack>
      </Center>
      
    </Box>
    </>

  );
};

export default Movies;
