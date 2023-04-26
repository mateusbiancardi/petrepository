import { collection, getDocs } from "firebase/firestore/lite";
import { db } from '../services/firebase-config'
import { useState, createContext, useContext, ReactNode, useEffect } from "react";


interface MemberInterface {
  id: string
  name: string
  function: string
  entryDate: string
  director: boolean
  imageURL: string
}

interface Member {
  members: MemberInterface[]
}

interface MemberProvider {
  children: ReactNode;
}

const memberContext = createContext<Member> (
  {} as Member
)

export function GetData ({children}: MemberProvider) {
  const [members, setMembers] = useState<MemberInterface[]>([]);

  const memberArray: MemberInterface[] = []
  
  
  useEffect(() => {
    const getMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "data"));
      querySnapshot.forEach((doc) => {
        memberArray.push({
          id: doc.id,
          name: doc.data().name,
          function: doc.data().function,
          entryDate: doc.data().entryDate,
          director: doc.data().director,
          imageURL: doc.data().imageURL
        });
      });
      setMembers(memberArray)
    }

    getMembers()
  }, [])
    
  
  return (
    <memberContext.Provider value={ { members } }>
      {children}
    </memberContext.Provider>
  )
}

export function membersList () {
  const membersList = useContext(memberContext)
  return membersList
}

