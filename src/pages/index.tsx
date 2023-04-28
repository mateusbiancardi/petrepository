
import { MemberList } from "@/components/MemberList";
import { useMembers } from "@/hooks/useMembers";
import { useEffect } from "react";

export default function Home() {
  const { getMembers } = useMembers()
  
  useEffect(() => {
    getMembers()
  }, [])
  return (
    <>
      <MemberList />
    </>
  )
}
