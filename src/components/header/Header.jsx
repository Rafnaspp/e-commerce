import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {BsCartXFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt=''/>
        <span>Amazon</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
            <ul className={css.menu}>
                <li>collections</li>
                <li>Brands</li>
                <li>new</li>
                <li>Sales</li>
                <li>ENG</li>
            </ul>
        </div>

        <input type="text" placeholder='search here' className={css.search} />
        <BsCartXFill  className={css.cart}/>
      </div>
    </div>
  )
}

export default Header
