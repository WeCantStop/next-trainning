import './index.scss'

export default () => {
  return (
    <header>
      <div className="logo">
        <img src="https://cnodejs.org/public/images/cnodejs.svg" />
      </div>
      <div className="tabs">
        <div>全部</div>
        <div>精华</div>
        <div>分享</div>
        <div>问答</div>
        <div>招聘</div>
      </div>
    </header>
  )
}
