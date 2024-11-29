import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProgramDetails } from '../components/programs/ProgramDetails';
import { programs } from '../data/programs';

export function ProgramDetailsPage() {
  const { id } = useParams();
  const program = programs.find(p => p.id === id);

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return <ProgramDetails program={program} />;
}