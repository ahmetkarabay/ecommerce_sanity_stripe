import React from 'react'

const SomethingSunglass = new URL('../assets/img/shop_img/SunglassesSomething1.0.png', import.meta.url)
const SomethingSunglass2 = new URL('../assets/img/shop_img/SunglassesSomething2.0.jpg', import.meta.url)

const ShopHeader = () => {
    return (
        <>
            <div className='ShopMain'>
                <div className='HeaderHead'>
                    <div className= "shopHead" >
                        <img src={SomethingSunglass} style={{height: 'auto', width: '15%',}} className="shopTitles" />
                        <h1 id='Title' className="shopTitles" >Shop</h1>
                        <img src={SomethingSunglass2} style={{height: 'auto', width: '15%',}} className="shopTitles" />
                    </div>
                    <h2 id='TitleSmall'>For the Highest Quality Sunglasses on the Market!</h2>
                </div>
            </div>
        </>
    )
}

export default ShopHeader