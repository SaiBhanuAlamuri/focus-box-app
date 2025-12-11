import React from "react";
import { Box, Typography, Button } from "@mui/material";
import TaskManagerHeader from "../components/TaskHeader";

import dummyTasks from "../components/dummy";
import TaskGrid from "../components/TaskGrid";


//Bar
import TaskBar from "../components/TaskBar";

//filters
import Filters from "../components/Filter";

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