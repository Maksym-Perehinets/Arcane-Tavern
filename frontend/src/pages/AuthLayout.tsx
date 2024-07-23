// import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';
import SignInForm from '../pages/SignInForm/SignInForm';
import SignUpForm from '../pages/SignUpForm/SignUpForm';

const AuthLayout = () => {
  let isAuth = false;
  return (
    <>
    {
      isAuth ? (
        <Navigate to="/" />
    ): (
        <>
        <div className='signDiv'>
          <Outlet />
        </div>
        <div className='rightDiv'><h2>About our website</h2>
        <p>Welcome to Arcane Tavern!</p><br />

    <p>Discover a trove of magical wonders at Arcane Tavern, your premier destination for Dungeons & Dragons spells. Delve into our curated spell collection, designed for both novice adventurers and seasoned spellcasters.</p>

    <br /><strong>What Sets Us Apart:</strong>

    <br /><ul>
       <li><strong>Effortless Search:</strong> Easily find the perfect spell for your quest with our user-friendly search feature. Filter by spell level, school of magic, and casting time to pinpoint the enchantment you seek.</li>

        <li><strong>Community Magic:</strong> Join fellow spell enthusiasts in our community hub. Share your favorite spells, exchange strategies, and immerse yourself in a world of collaborative enchantment.</li>

        <li><strong>Regular Updates:</strong> Stay ahead of the magical curve with our regularly updated spell database. Embrace the latest incantations for a gaming experience that's always fresh and exciting.</li>
    </ul>

    <p>Embark on a magical journey with Arcane Tavern – where spells come to life, and adventures are fueled by the mystical. Cast your way to victory!</p>

    <p>Arcane Tavern Team</p>
        
        </div>
        </>
      
    
    )}
    
    </>
    
  )
}

export default AuthLayout