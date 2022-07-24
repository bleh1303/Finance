import React,{ useState} from 'react'

function Create() {
  const [title,setTitle]=useState("");
  const [post,setPost]=useState("");

  return (
    <div className="createPage">
      <div className="cpContainer">
        <h1>
          Create A Post
        </h1>
        <div className="inputGrp">
              <label>Title:</label>
              <input placeholder="Enter The Title Of Your Post" onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="inputGrp">
              <label>Post:</label>
              <textarea placeholder="Tell Us Your Story!" onChange={(e)=>{setPost(e.target.value)}}/>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  )
}

export default Create
