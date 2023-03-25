import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function Modals({ isOpen, onClose, movie, onSave }) {
  const [editedMovie, setEditedMovie] = useState(movie);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedMovie.id, editedMovie);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" value={editedMovie.title} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Director</FormLabel>
            <Input name="director" value={editedMovie.director} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Year</FormLabel>
            <Input name="year" value={editedMovie.year} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Genre</FormLabel>
            <Input name="genre" value={editedMovie.genre} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>IMDB Rating</FormLabel>
            <Input name="IMDB_Rating" value={editedMovie.IMDB_Rating} onChange={handleInputChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Ticket Cost</FormLabel>
            <Input name="ticket" value={editedMovie.ticket} onChange={handleInputChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" ml={3} onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Modals;
