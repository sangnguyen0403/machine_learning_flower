import './App.css';
import { Box, Button, Center, Flex, HStack, Heading, Image, Input, Select, VStack, useMultiStyleConfig } from '@chakra-ui/react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task1 from './components/Task1';
import Task2 from './components/Task2';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
