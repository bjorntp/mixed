import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Note {
  id: string;
  title: string;
  body: string;
}

const HomeComponent = () => {
  const [notes, setNotes] = useState(<>No posts found!</>);
  const navigate = useNavigate();

  const api = axios.create(
    {
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true,
    }
  );

  const getPosts = async () => {
    try {
      const data = await api.get('notes/view').then(res => res.data);

      const cards = data.map((obj: Note, index: number) => (
        <div key={index} className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md">
          <h3>Titel: {obj.title}</h3>
          <p>Inehåll: {obj.body}</p>
        </div>
      ));
      setNotes(cards);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPosts();
  });

  return (
    <div className="h-full min-h-svh w-svh flex flex-col bg-gray-100 align-middle justify-top items-center">
      {notes}
    </div >
  )
}

export default HomeComponent;
