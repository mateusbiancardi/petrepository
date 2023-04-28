
import { useMembers } from "@/hooks/useMembers";
import { Container, Text, Box, Image } from "@chakra-ui/react";

export function MemberList () {
  const { members } = useMembers()
  function handleFunction(memberFunction: string) {
    switch (memberFunction) {
      case 'tec':
        return 'Tecnologia'
      case 'civil':
        return 'Civil'
      case 'com':
        return 'Comercial'
      case 'RH':
        return 'RH'
      case 'Pres':
        return 'Presidente'
    }
  }

  function handleDirector(memberDirector: boolean, memberFunction: string) {
    if (memberDirector === true && memberFunction !== 'Pres') {
      return 'Diretor(a) de '
    }
    return false
  }
  
  return (
    <Container>
      <Text fontWeight='bold'>Lista de membros:</Text>
      {members.map((member) => (
        <Box display='flex' justifyContent='center' background='gray.500' rounded='8' key={member.id} margin='1rem 0 0 0'>
          <Image alt="Imagem" boxSize='40%' src={member.imageURL} rounded='8'/>
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