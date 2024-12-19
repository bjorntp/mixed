import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Note {
  id: string;
  title: string;
  body: string;
  user: {
    userName: string;
  };
}

const MyPostComponent = () => {
  const [notes, setNotes] = useState(<></>);
  const navigate = useNavigate();

  const api = axios.create(
    {
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true,
    }
  );

  const deletePost = async (noteId: string) => {
    try {
      await api.post('notes/delete', { noteId });
    } catch (error) {
      console.error(error);
    }
  }

  const getPosts = async () => {
    try {
      const data = await api.get('notes/view_posts').then(res => res.data);
      if (data.length === 0) {
        setNotes(
          <div className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md" >
            <p>No posts found!</p>
          </div>)
      } else {
        const cards = data.map((obj: Note, index: number) => (
          <div key={index} className="bg-white p-9 my-9 w-1/2 h-fit border border-black rounded-md">
            <h3>Titel: {obj.title}</h3>
            <p>Inehåll: {obj.body}</p>
            <div className='flex flex-col justify-between'>
              <button
                className="p-2 mt-2 bg-blue-200 rounded-md"
                type="button"
                onClick={() => navigate(`/edit_post/${obj.id}`, { state: { title: obj.title, body: obj.body } })}
              >Edit</button>
              <button className="p-2 mt-2 bg-blue-200 rounded-md" onClick={(e) => deletePost(obj.id)}>Delete</button>
            </div>
          </div >
        ));
        setNotes(cards);
      }
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

export default MyPostComponent;
