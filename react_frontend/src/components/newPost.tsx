import React, { useState } from 'react'

const NewPost = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit post logic
  }

  return (
    <div className="h-svh w-svh flex flex-row bg-gray-100 align-middle justify-center ">
      <form onSubmit={handleSubmit} className="bg-white p-9 my-9 w-fit h-fit border border-black rounded-md">
        <label className="w-full flex flex-row justify-around py-2">
          <h1>Title: </h1>
          <input type="text" placeholder="Enter the title" onChange={e => setTitle(e.target.value)} value={title} className="w-1/2" />
        </label>
        <label className="w-full flex flex-row justify-around py-2">
          <h1>Body: </h1>
          <input type="text" placeholder="Enter the body" onChange={e => setBody(e.target.value)} value={body} className="w-1/2" />
        </label>
        <div className="w-full flex flex-row justify-end">
          <button className="p-2 my-2 bg-blue-200 rounded-md" type="submit">Submit post!</button>
        </div>
      </form>
    </div >
  )
}

export default NewPost;
