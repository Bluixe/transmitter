import React, { isValidElement, useRef, useState } from "react";
import { store } from "./utils";
import "./css/Image.css"
export function Image(){
  const repo = store("repo", "")
  const {clipboard} = require("electron")
  const [drag, setDrag] = useState(0)
  const url = `https://api.github.com/repos/${repo}/contents/`
  const fileElemRef = useRef<HTMLInputElement>(null)
  // const clipBoard = navigator.clipboard
  async function upLoad(url: RequestInfo, value: string) {
    const currentTime = new Date().valueOf()
    url = `${url}${currentTime}.jpg`
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + store("token", "")
      },
      body: JSON.stringify({
        message: "my commit",
        content: value
      }),
      mode: 'cors'
    })
    const result = await (async res => {
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
    if (result.status === 422) {
      alert("File already exists!")
      return
    }
    if (result.data) {
      // console.log(result.data)
      const img_url = result.data.content.download_url as string
      // console.log(img_url)
      clipboard.writeText(img_url)
      new Notification("Upload Success", {body: img_url})
      return
    }
  }
  function imageUpload(file:File) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      const resString = this.result as string //类型转换
      if(this.result)
        upLoad(url, resString.split(',')[1])
    }
    reader.onerror = function () {
      new Notification("Fail to read the file")
    }
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
      new Notification("Not an image!")
      return
    }
    imageUpload(file)
  }
  function handleFiles(){
    let files = fileElemRef.current?.files
    if(files) {
      imageUpload(files[0])
    }
  }
  function onChoose(){
    fileElemRef.current?.click()
  }
  const chooser = <label onClick={onChoose}>choose</label>
  const fileElem = <input
   ref={fileElemRef} 
   type="file" 
   id="fileelem" 
   onChange={() => handleFiles()}
   multiple accept="image/*"/>
  return (<div className="image">
    <div className="header">Upload Image</div>
    <div 
      className="imagedrag" id={`drag${drag}`}
      // ref={focusDrag}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragOver={onDragover}>
        Drag or {chooser} a file
    </div>
    {fileElem}
  </div>)
}