import { useState } from "react";

const Form = () => {

  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");


  function uploadPost(){
    console.log('post uploaded')
  }


  return (
    <form className="flex flex-col relative text-black dark:text-white/75 space-y-5">
      <textarea
        rows="4"
        placeholder="What do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder-white/75 resize-none"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => {
          setPhotoUrl(e.target.value);
        }}
      />
      <button
        className="absolute bottom-0 right-0 font-medium bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        disabled={!(input.trim() || photoUrl.trim()) }
        onClick={(e)=>{
          e.preventDefault();
          uploadPost();
        }}
        type="submit"
      >
        Post
      </button>
    </form>
  );
}

export default Form