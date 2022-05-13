import React, { useRef, useState } from "react";
import { albumModel } from "./albumModel";
import { store, download, del } from "./utils";
import "./css/Album.css"


export function Album(){
  const model = new albumModel("images");
  const {clipboard} = require("electron")
  const [ status, setStatus ] = useState(true);
  const {shell} = require('electron')
  const repo = store("repo", "")
  const url = `https://api.github.com/repos/${repo}/contents/`
  function destroy(image:any){
    model.destroy(image)
    deleteImage(url+image.url.split("/").slice(-1), image.sha)
    setStatus(!status)
  }
  const { images } = model;
  async function deleteImage(url: RequestInfo, sha: string) {
    const result = await del(url, sha)
    console.log(11)
    if(result.data){
        new Notification("Delete Success")
    } else {
        new Notification("Delete Failed")
    }
    return
  }
    // const shownImage = 
  function cpUrl(image:any){
    clipboard.writeText(image.url)
    new Notification("Url Copied", {body: image.url})
  }
  const todoItems = images.map((image:any) => (
    <div className="image_item">
      <img src={image.url} className="image_img"/>
      <div className="image_detail">
      <div>
      <a href={image.url}
      onClick={(event)=>{
          event.preventDefault()
          shell.openExternal(image.url)
      }}>
          {image.url.split("/").slice(-1)}
      </a>
      </div>
      <div>
      <button type="button" className="destroy" onClick={(event)=>destroy(image)} >Delete</button>
      <a>&nbsp;&nbsp;</a>
      <button type="button" className="get_url" onClick={(event)=>cpUrl(image)} >Url</button>
      </div>
      </div>
    </div>
  ))
  return (
    <div className="album">
      <ul className="album-list">
        {todoItems}
      </ul>

    </div>
  )
}
