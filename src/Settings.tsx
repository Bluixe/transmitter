import React, { useState } from "react"
import { store } from "./utils"
import "./css/Settings.css"

export function Settings() {
  const [token, setToken] = useState(()=>store("token",""))
  const [repo, setRepo] = useState(()=>store("repo",""))
	const [tokenText, setTokenText] = useState('')
  const [repoText, setRepoText] = useState('')

	const onTokenChange = function(event:React.ChangeEvent<HTMLInputElement>) {
		setTokenText(event.target.value)
	}
  const onRepoChange = function(event:React.ChangeEvent<HTMLInputElement>) {
		setRepoText(event.target.value)
	}
	const onTokenKeydown = function(event:React.KeyboardEvent<HTMLInputElement>) {
		if (event.key == 'Enter') {
			event.preventDefault() //避免默认的ENTER操作被执行
			const val = tokenText.trim() //去除前后空白字符
			if (val) {
        store("token", val)
        setToken(val)
        setTokenText('')
			}
		}
	}
  const onRepoKeydown = function(event:React.KeyboardEvent<HTMLInputElement>) {
		if (event.key == 'Enter') {
			event.preventDefault() //避免默认的ENTER操作被执行
			const val = repoText.trim() //去除前后空白字符
			if (val) {
        store("repo", val)
        setRepo(val)
        setRepoText('')
			}
		}
	}
	return (
		<div className="settings">
      <div className="item">
        <div className="key">Your current token:</div>
        <div className="value">{token}</div>
      </div>
      <div className="item">
        <div className="key">Here to change your token:</div>
        <input
          className="input"
          placeholder="Enter your github token here"
          value={tokenText}
          onKeyDown={event => onTokenKeydown(event)}
          onChange={event => onTokenChange(event)}
        />
      </div>
      <div className="item">
        <div className="key">Your current repository:</div>
        <div className="value">{repo}</div>
      </div>
      <div className="item">
        <div className="key">Here to change your token:</div>
        <input
          className="input"
          placeholder="Example: xxx/xxx"
          value={repoText}
          onKeyDown={event => onRepoKeydown(event)}
          onChange={event => onRepoChange(event)}
        />
      </div>
    </div>
		
	)
}