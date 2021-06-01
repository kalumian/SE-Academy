// Edit Path In Show Video 
export const PathNextEp =(episode , PathName)=>{
    const ArrayNextEp= PathName.split("/")
    ArrayNextEp.pop()
    ArrayNextEp.push(Number(episode) + 1)
   const PathNextEp =  ArrayNextEp.join("/")
   return PathNextEp
}
export const PathBackEp =(episode , PathName)=>{
    const ArrayNextEp= PathName.split("/")
    ArrayNextEp.pop()
    ArrayNextEp.push(Number(episode) - 1)
   const PathNextEp =  ArrayNextEp.join("/")
   return PathNextEp
}
export const Path_Back_One_Unit =( PathName)=>{
    const Path = PathName.split("/")
    Path.pop()
    const Path_Back_One_Unit =  Path.join("/")
   return Path_Back_One_Unit
}
//-------------------