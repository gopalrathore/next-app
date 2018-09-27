import Link from 'next/link'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="top-header util__flex util__container">
        <div className="top-header__col">
          <ul className="top-header__nav">
            <li>
              <Link href="/index">
                <a className="top-header__link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="top-header__link">About</a>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx>{`
          .top-header {
            justify-content: space-between;
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .top-header__logo {
            text-align: center;
            position: absolute;
            left: 50%;
          }

          .top-header__logo img {
            position: relative;
            max-height: 60px;
            left: -50%;
            top: -15px;
          }

          .top-header__second-navi {
            text-align: right;
          }

          .top-header__nav {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .top-header__nav li {
            padding: 0 20px 0 0;
          }

          .top-header__nav--right li {
            padding-right: 0;
            padding-left: 20px;
          }

          .top-header__link {
            line-height: 1.5;
            color: #000;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border .15s ease;
          }

          .top-header__link:hover {
            border-bottom: 2px solid #000;
          }
        `}</style>
      </header>
    )
  }
}

export default Nav;