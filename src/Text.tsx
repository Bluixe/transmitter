import React, { useState } from "react";
import { store, upload, download } from "./utils";
import "./css/Text.css"

export function Text() {
  const repo = store("repo", "")
  const [text, setText] = useState("None")
  const [newText, setNewText] = useState("")
  const url = `https://api.github.com/repos/${repo}/contents/text.txt`
  const getText = async function (url: RequestInfo) {
    const result = await download(url)
    let res = "None"
    if (result.data) {
      res = (Buffer.from(result.data.content, "base64").toString())
      console.log(result.data)
    }
    setText(res)
  }
  const getSha = async function (url: RequestInfo) {
    const result = await download(url)
    let sha = ""
    if (result.data) {
      sha = result.data.sha
    }
    return sha
  }
  const refreshText = function () {
    getText(url)
  }
  const uploadText = async function (url: RequestInfo, value: string) {
    const sha = await getSha(url)
    const result = await upload(url, value, sha)
    if (result.data) {
      console.log(result.data)
      refreshText()
    }
  }
  const textUpload = function (event:React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key == 'Enter'){
      event.preventDefault()
      let val = newText.trim()
      if (val) {
        let valBuf = Buffer.from(val, "utf-8")
        val = valBuf.toString("base64")
        console.log(val)
        uploadText(url, val)
      }
      setNewText('')
    }
  }
  const textChange = function (event:React.ChangeEvent<HTMLTextAreaElement>) {
    setNewText(event.target.value)
  }

  const refresh = <img src="../img/refresh.svg" className="refreshimg"/>
  return <div className="text">
    <div className="item">
      <div className="key"
        onClick={refreshText}>Current Text:{refresh}</div>
      <div className="value">{text}</div>
    </div>
    <div className="item">
      <div className="key">Here to put text:</div>
      <textarea cols={40} rows={50} className="textitem" value={newText} onChange={textChange} onKeyDown={textUpload}></textarea>
    </div>
    
  </div>
}