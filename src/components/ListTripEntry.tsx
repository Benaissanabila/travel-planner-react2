
import styled, {keyframes} from 'styled-components';
interface Props{
    id:string,
    name:string | null | undefined,
    description:string | null | undefined,
    image:string | null | undefined,
    handleOpen:()=>void
}

export const ListTripEntry=({id,name,description,image,handleOpen}:Props)=>{

    return(
        <ListTripEntryDiv

            key={id}
            image={image ? image:"default"}
            onClick={handleOpen}
        >
            <Heading>{name}</Heading>
            <Paragraphe>{description}</Paragraphe>
        </ListTripEntryDiv>
    )
}
interface ListTripEntryProps {
    image: string;
}
const scaleAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }`
const ListTripEntryDiv = styled.div<ListTripEntryProps>`
  cursor: pointer;
  width: 100%;
  height:700px;
    margin: 50px;
    border-radius: 20px;
    border:5px solid blueviolet;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(/images/${(props) => props.image}.webp);
    transition: transform 0.3s ease-in-out;


    &:hover {
        animation: ${scaleAnimation} 0.5s ease-in-out;
    }
`;
const Heading = styled.h1`
  background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
  color: white; // White text
  padding: 2rem;
  border-radius: 4px;
`;
const Paragraphe = styled.p`
    width: 50%;
    background-color: rgba(128, 128, 128, 0.5); // Transparent grey background
    color: white; // White text
    padding: 1rem;
    border-radius: 4px;
`