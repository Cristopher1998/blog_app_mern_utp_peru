import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Blog UTP</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ytimg.com/vi/NBGmrSuTGIk/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
}
