import React from "react";
import menu from "../data.json";

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu,
    };
  }

  handleClick = (event) => {
    let category = event.target.innerText;
    let menuList = menu.filter(
      (list) => list.category === category.toLowerCase()
    );

    if (category === "All") {
      this.setState({
        menu: menu,
      });
    } else {
      this.setState({
        menu: menuList,
      });
    }
    console.log(menuList);
  };

  render() {
    return (
      <>
        <div className="btn">
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            All
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Breakfast
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Lunch
          </button>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Shakes
          </button>
        </div>
        <div className="allcard">
          {this.state.menu.map((item) => {
            return (
              <>
                <div className="menu-card" key={item.id}>
                  <figure>
                    <img src={item?.img || "default.jpeg"} alt={item.title} />
                  </figure>
                  <div className="menu-details">
                    <div className="menu-title ">
                      <h2>{item.title}</h2>
                      <small>${item.price}</small>
                    </div>

                    <p>{item.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Food;
