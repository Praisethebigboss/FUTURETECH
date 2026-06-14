import React from "react";
import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";
import { TabProvider } from "./TabContext";
export const AppProvider=({children})=>{
    return(
      <AuthProvider>
      <ProfileProvider>
      <TabProvider>
       {children}
     </TabProvider>
     </ProfileProvider>
      </AuthProvider>
    )
}
