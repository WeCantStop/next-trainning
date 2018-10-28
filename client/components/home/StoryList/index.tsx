import './index.scss'

export default ({ stories }) =>
  <div className="stort-wrap">
    {
      stories.map((item, index) => {
        return (
          <div key={index} className="story-item">
            <div>
              <img src={item.images[0]} alt="故事图片" />
            </div>
            <div key={index}>{item.title}</div>
          </div>
        )
      })
    }
  </div>

