import { useState, useEffect, useMemo, useRef } from 'react'

interface IProps {
  name: string,
  children: any
}

const TestButton = ({ name, children }: IProps) => {
  // 4 useRef
  const inputRef = useRef(null)
  // 1. useState => setState
  const [count, changeCount] = useState(0)

  // 2. useEffect => 相当于 componentDidMounted componentDidUpdate
  useEffect(() => {
    document.title = `点击了${count}次呢`
    console.log(inputRef.current)
  }, [count])

  // 3. useMemo 性能优化
  const parseName = useMemo(() => {
    console.log(666)
    return name + 1
  }, [name])

  return (
    <>
      <div>name: {parseName}</div>
      <div>children: {children}</div>
      <input ref={inputRef} type="text"/>
      <div>{count}</div>
      <button onClick={() => changeCount(count => count + 1)}>+1</button>
      <button onClick={() => changeCount(count => count + 2)}>+2</button>
    </>
  )
}

export default TestButton
