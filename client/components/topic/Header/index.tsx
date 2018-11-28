import './index.scss'

const IMG = 'https://cnodejs.org/public/images/cnodejs_light.svg'

export default ({clickLeftBtn}) => {
  return (
    <div className="topic-header">
      <div className="left" onClick={clickLeftBtn}>返回</div>
      <div className="center">
        <img src={IMG} alt=""/>
      </div>
      <div className="right"></div>
    </div>
  )
}
