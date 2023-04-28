
import { useMembers } from "@/hooks/useMembers";
import { Box, Text } from "@chakra-ui/react";



export function ProjectList() {
  const { members } = useMembers();
  return (
    <Box w="100%" h="10px" color="black">
      {members && members.map((member) => (
        <Text key={member.name}>
          {member.name}
          {member.function}
          {member.entryDate}
          {member.director}
          {member.imageURL}
       </Text>
      ))}
    </Box>
  )
}