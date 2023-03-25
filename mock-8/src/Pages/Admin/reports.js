import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Reports = () => {

    const navigate = useNavigate()

    let token = localStorage.getItem("token")
    if(!token){
        navigate("/login")
    }
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("user");
    const bookingsArr = JSON.parse(localStorage.getItem("arr")) || [];

    const formattedBookings = bookingsArr.map((booking) => {
      return {
        username: username,
        movie: booking.title,
      };
    });

    setBookings(formattedBookings);
  }, []);

  return (
    <Table style={{marginTop:"20px"}} variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Username</Th>
          <Th>Booked Movie</Th>
        </Tr>
      </Thead>
      <Tbody>
        {bookings.map((booking, index) => (
          <Tr key={index}>
            <Td>{booking.username}</Td>
            <Td>{booking.movie}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Reports;
