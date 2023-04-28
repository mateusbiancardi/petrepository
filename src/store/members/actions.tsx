import { db } from "@/services/firebase-config";
import { Member } from "@/types/member";
import { getDocs, collection } from "firebase/firestore/lite";
import { MembersStore as store } from ".";

export async function getMembers()  {
  const querySnapshot = await getDocs(collection(db, "data"));

  const members: Member[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Member[];

  store.update((s) => {
    s.members = members;
  }
  );
  
}

export function clearStore() {
  store.update((s) => {
    s.members = [];
  })
}


