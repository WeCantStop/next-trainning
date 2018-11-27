import './index.scss'

const LOGO = 'https://cnodejs.org/public/images/cnodejs.svg'

export default ({ options, clickTab }) => {

  return (
    <header>
      <div className="logo">
        <img src={LOGO} />
      </div>
      <div className="tabs">
        {
          options.map((item, index) => {
            return <div key={index} className={item.active ? 'active' : ''}
              onClick={clickTab.bind(this, item)}>{item.label}</div>
          })
        }
      </div>
    </header>
  )
}
