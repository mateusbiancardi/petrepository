import { MembersStore as store } from "@/store/members";
import { getMembers } from "@/store/members/actions";
import { clearStore } from '../store/members/actions';

export const useMembers= () => 
  store.useState((s) => ({
    ...s,
    getMembers, 
    clearStore
  })
);




