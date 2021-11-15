import React, { Component } from "react";
import { products } from "./Products";
export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products,
    // products: [
    //   {
    //     _id: "rolex",
    //     title: "Rolex",
    //     src: "https://rukminim1.flixcart.com/image/150/150/kll7bm80/smartwatch/y/g/q/43-mo-sw-sense-500-android-ios-molife-original-imagyny5cfgbjbxg.jpeg?q=70",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 23,
    //     colors: ["red", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "6",
    //     title: "Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens",
    //     src: "https://rukminim1.flixcart.com/image/200/200/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 23,
    //     colors: ["red", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "2",
    //     title:
    //       "ZEBRONICS 10000 mAh Power Bank (20 W, Fast Charging)  (Blue, Lithium Polymer)",
    //     src: "https://rukminim1.flixcart.com/image/416/416/kpwybgw0/power-bank/r/m/v/zeb-md10000mq1-power-bank-with-rapid-charge-10000-zeb-md10000mq1-original-imag4fp4m4vmxn4g.jpeg?q=70",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 19,
    //     colors: ["red", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "3",
    //     title:
    //       "HP Wireless Keyboard and Mouse 300 Wireless Laptop Keyboard  (Black)",
    //     src: "https://rukminim1.flixcart.com/image/416/416/jxjahe80/computer-acc-combo/v/w/u/3ml04aa-wireless-keyboard-and-mouse-combo-2-hp-original-imafhz7d7humuewy.jpeg?q=70",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 50,
    //     colors: ["lightblue", "white", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "4",
    //     title:
    //       "APPLE MacBook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
    //     src: "https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 15,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "5",
    //     title: "Nike Shoes 05",
    //     src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 10,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "6",
    //     title: "Nike Shoes 06",
    //     src: "https://webimg.netlify.app/images/topsellers/flexbox.png",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 17,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "7",
    //     category: "laptop",
    //     title: "Nike Shoes 06",
    //     src: "https://webimg.netlify.app/images/topsellers/flexbox.png",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 17,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "8",
    //     title: "Nike Shoes 06",
    //     category: "laptop",
    //     src: "https://webimg.netlify.app/images/topsellers/flexbox.png",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 17,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "9",
    //     title: "Nike Shoes 06",
    //     category: "laptop",
    //     src: "https://webimg.netlify.app/images/topsellers/flexbox.png",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 17,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    //   {
    //     _id: "10",
    //     title: "Nike Shoes 06",
    //     category: "laptop",
    //     src: "https://webimg.netlify.app/images/topsellers/flexbox.png",
    //     description: "UI/UX designing, html css tutorials",
    //     content:
    //       "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     price: 17,
    //     colors: ["orange", "black", "crimson", "teal"],
    //     count: 1,
    //   },
    // ],,
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
