import { useContext } from "react";
import { TiPencil } from "react-icons/ti";
import styled from "styled-components";
import UserContext from "../../contexts/UserContexts";

export default function EditButton({ userId }) {
  const { user } = useContext(UserContext);

  return userId === user.id ? (
    <>
      <PencilButton>
        <TiPencil />
      </PencilButton>
    </>
  ) : (
    ""
  );
}

const PencilButton = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: none;
`;
