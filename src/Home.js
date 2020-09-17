import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
           <img
           className="home__image"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/neel/CTR/GW/1500X600-echodotplug_1X._CB405775667_.jpg"
           alt=""
           />
           <div className="home__row">
           <Product
           id="12321341"
           title="The Lean Startup: How Constant Innovations Creates Radically Successful Businesses Paperback"
           price= {11.96}
           rating = {3}
           image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
           />

            <Product
           id="12321341"
           title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black "
           price= {199}
           rating = {4}
           image = "https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
           />
           </div>

           <div className="home__row">
           <Product
           id="12321341"
           title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls (updated for 2019)"
           price= {49}
           rating = {3}
           image = "https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US160_.jpg"
           />

            <Product
           id="12321341"
           title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model) "
           price= {329.99}
           rating = {3}
           image = "https://images-na.ssl-images-amazon.com/images/I/41h0H4SCgPL._AC_US160_.jpg"
           />

            <Product
           id="12321341"
           title="ASUS VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage, USB-C, Windows 10 Home In S Mode, Up To 10 Hours Battery Life, One Year of Microsoft 365, L203MA-DS04 "
           price= {287}
           rating = {4}
           image = "https://images-na.ssl-images-amazon.com/images/I/51svyK3ruYL._AC_US160_.jpg"
           />
           </div>

        </div>
    )
}

export default Home
