import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ACERCA DE MI</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGAJ96MGXFCjHG8sWztsv9DNcAt6Pxbg_meWmSKVlRnXLoSlqets6yL-X2oSlgxr98wk&usqp=CAU"
          alt=""
        />
        <p>
          Mi nombre es Cristopher Sanchez Zavala, estudio la carrera de Ingeniería de Sistemas e 
          informática en la Universidad Tecnologica del Peru y este es mi primer proyecto MERN
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">ig:troeno_yts</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW x FOLLOW carita de vaquero</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
