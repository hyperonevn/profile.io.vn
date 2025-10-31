import React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
export function App() {
  return <MainLayout>
      <Home />
    </MainLayout>;
}