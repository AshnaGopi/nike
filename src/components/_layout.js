import React from 'react';
import {Slot} from "react-router-dom";
import AppProvider from '../context/firstContext';

export default function Layout() {
  return (
   <AppProvider>
    <Slot/>
   </AppProvider>
  )
}
