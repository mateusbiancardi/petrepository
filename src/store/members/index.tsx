import { Store } from "pullstate";

import { Member } from "@/types/member";


interface Props {
  members: Member[] 
}

const defaultState = {
  members: []
}

export const MembersStore = new Store<Props>(defaultState)

