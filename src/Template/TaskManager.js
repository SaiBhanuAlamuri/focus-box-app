import React from "react";
import { Box, Typography, Button } from "@mui/material";
import TaskManagerHeader from "../Components/TaskHeader";

import dummyTasks from "../Components/dummy";
import TaskGrid from "../Components/TaskGrid";


//Bar
import TaskBar from "../Components/TaskBar";

//filters
import Filters from "../Components/Filter";

export default function TaskManager() {

   return(
    <Box sx={{ display: "flex", flexDirection: "column", width:"100vw",minHeight: "100vh",height:"auto",background: "linear-gradient(135deg, #1a2332 0%, #0f1419 100%)", }}>

         <TaskManagerHeader/>
         <TaskBar/>
         <Filters/>

         <TaskGrid tasks={dummyTasks}/>
      
    </Box>
   )
}