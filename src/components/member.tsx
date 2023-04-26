
import { Container, Text, Box, Image } from "@chakra-ui/react";
import { membersList } from "@/hooks/getDocs";

export function Member () {
  const { members } = membersList()
  console.log(members)
  function handleFunction(memberFunction: string) {
    if (memberFunction == 'tec') {
      return 'Tecnologia'
    }
    else if (memberFunction == 'civil') {
      return 'Civil'
    }
    else if (memberFunction == 'com') {
      return 'Comercial'
    }
    else if (memberFunction == 'RH') {
      return 'RH'
    }
    else if (memberFunction == 'Pres') {
      return 'Presidente'
    }
  }

  function handleDirector(memberDirector: boolean, memberFunction: string) {
    if (memberDirector == true && memberFunction != 'Pres') {
      return 'Diretor(a) de '
    }
    return false
  }
  
  return (
    <Container>
      <Text fontWeight='bold'>Lista de membros:</Text>
      {members.map((member) => (
        <Box display='flex' justifyContent='center' background='gray.500' rounded='8' key={member.id} margin='1rem 0 0 0'>
          <Image boxSize='40%' src={member.imageURL} rounded='8'/>
          <Container>
            <Text>{member.name}</Text>
            <Text>{member.entryDate}</Text>
            <Text>{handleDirector(member.director, member.function)}{handleFunction(member.function)}</Text>
          </Container>
        </Box>
      ))}
    </Container>
  )
}