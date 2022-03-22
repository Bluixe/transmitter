import React, { useState } from "react";
import { store } from "./utils";
import "./css/Image.css"
export function Image(){
  const repo = store("repo", "")
  const [drag, setDrag] = useState(0)
  const url = "https://api.github.com/repos/Bluixe/cloudimg/contents/test3.md"
  async function upLoad(url: RequestInfo) {
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Baerer " + store("token", "")
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        message: "my commit",
        content: "aGVsbG8sd29ybGQ="
      }),
      mode: 'cors'
    })
    return await (async res => {
      if (res.status >= 200 && res.status < 400) {
        return {
          status: res.status,
          data: await res.json()
        }
      } else {
        return {
          status: res.status,
          data: null
        }
      }
    })(response).catch(e => e)
  }
  function onDragover(event:React.DragEvent) {
    setDrag(1);
    event.preventDefault();
    event.stopPropagation();
  }
  function onDragLeave(event:React.DragEvent) {
    setDrag(0);
    event.preventDefault();
    event.stopPropagation();
  }
  function onDrop(event:React.DragEvent) {
    setDrag(0);
    // 阻止默认事件和冒泡
    event.preventDefault();
    event.stopPropagation();
    let file = event.dataTransfer.files[0]
    if(!file.type.includes('image')) {
      alert("Not an image!")
      return
    }
    // console.log(file)
    // FileReader异步读文件
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      console.log(this.result)
      const result = upLoad(url)
      console.log(result)
    }
    reader.onerror = function () {
      alert("Fail to read the file")
    }
  }
  function onChoose(){

  }
  const chooser = (<label onClick={onChoose}>choose</label>)
  return (<div className="image">
    <div className="header">Upload Image</div>
    <div 
      className="imagedrag" id={`drag${drag}`}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragOver={onDragover}>
        Drag or {chooser} a file
    </div>
  </div>)
}