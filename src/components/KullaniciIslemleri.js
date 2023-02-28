import React from 'react'
import logo from "../img/logo.png"
import search from "../img/icons/search.png"
import foto from "../img/icons/foto.png"
import diyez from "../img/icons/diyez.png"
import alarm from "../img/icons/alarm.png"
import deletee from "../img/icons/delete.png"
import downarrow from "../img/icons/down-arrow.png"
import edit from "../img/icons/edit.png"
import main from "../img/icons/main.png"
import off from "../img/icons/off.png"
import settings from "../img/icons/settings.png"
import user from "../img/icons/user.png"
import profile from "../img/profile.png"
import { useState } from 'react'

import {
  BrowserRouter as Router, Switch,
  Route, Redirect, redirect, useNavigate, Link, Routes, NavLink, Navigate, navigate
} from "react-router-dom";
import AnaSayfa from './AnaSayfa'

const INITIAL_STATE = [
  { id: 1, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 2, name: 'Haydar Candan', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 3, name: 'Akın Peyda', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 4, name: 'Suna Küçük', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 5, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 6, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 7, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 7, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 7, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 7, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
  { id: 7, name: 'Lale Soylu', mail: 'lalesoylu@gail.com', phone: '0 555 555 55 55', state: 'aktif' },
]



function KullaniciIslemleri() {
  const navigate = useNavigate();

  let yonlendir = () => {
    return navigate("/anasayfa");
  }

  const [users, setUsers] = useState(INITIAL_STATE)

  const renderUsers = () => {
    return users.map(({ id, name, mail, phone, state }) => {
      return <tr key={id} class="bg-white dark:bg-gray-800" >
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{id}</td>
        <td class="px-6 py-4 flex space-x-2 text-center align-middle content-center align-center">
          <img src={profile}></img>
          <div className='m-auto'>
            <span className='h-[16px] '>{name}</span>
          </div></td>
        <td class="px-6 py-4">{mail}</td>
        <td class="px-6 py-4">{phone}</td>
        <td class="px-6 py-4">
          <div className='bg-[#6FCF9733]/[0.2] rounded-[27px] text-[#27AE60] font-semibold text-center w-[53px] h-[27px] px-auto mx-auto '>
            <p className='my-auto py-1 py-auto'>{state}</p>
          </div>
        </td>
        <td class="px-6 py-4">
          <img className='object-none inline-block' src={edit}></img>
          <img className='object-none inline-block ml-[27px]' src={deletee} ></img>
        </td>
      </tr>
    })
  }


  const renderHeader = () => {
    return <tr>
      {Object.keys(INITIAL_STATE[0]).map(key => <th>{key}</th>)}
    </tr>
  }

  return (
    <>
      <body className='bg-[#F8F8F8] h-screen'>
        <nav
          class="flex items-center justify-between flex-wrap bg-white py-3 lg:px-12 shadow border-solid border-t-2 border-blue-700">
          <div class="flex justify-between lg:w-auto w-full lg:border-b-0 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800">
              <img src={logo} />
            </div>

          </div>

          <div class="menu w-full lg:block flex-end lg:flex lg:items-center lg:w-auto lg:px-3 px-8">

            <div class="relative mx-auto text-gray-600 lg:block hidden">
              <button type="submit" class="absolute left-0 top-0 mt-3 ml-2">
                <img className='' src={search}></img>
              </button>
              <input className="border-2 border-gray-300 bg-white h-10 pl-8 pr-8 rounded-lg text-sm focus:outline-none"
                type="search" name="search" />

            </div>
            <div class="flex space-x-4 ml-[32px]">

              <img src={settings} className="block text-md px-1 py-2 rounded ml-2 mt-4 lg:mt-0"></img>
              <img src={alarm} className="block text-md py-2 rounded ml-[19px] mt-4 lg:mt-0"></img>

              <div className='flex'>
                <img src={foto}></img>
                <p className=" block text-md pl-2 pr-4 py-2 rounded font-bold mt-4 lg:mt-0">Emre</p>
                <img src={downarrow} className="h-[11px] mt-[15px]"></img>
              </div>


            </div>

          </div>

        </nav>


        <aside id="sidebar-multi-level-sidebar" class="fixed left-0 z-40 w-[296px] h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
          <div class="h-full px-5 pt-[33px] py-4 overflow-y-auto bg-blue-50 dark:bg-gray-800 -z-50">

            <div className='flex space-x-6 s'>
              <img src={foto} className='h-[40px] w-[40px] my-auto'></img>
              <div className='flex flex-col space-y-1'>
                <div>
                  <p className='h-5 font-bold text-[#1F2633]'>emre@mayzor.net</p>
                </div>
                <div>
                  <p className='h-4 font-bold text-[#B8BFCC]'>Yönetici</p>
                </div>
              </div>
              <img src={off} className={'object-none right-0'}></img>
            </div>
            <ul class="space-y-2 mt-[70px] ">
              <li>
                <button type="button" class="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                  <span class="flex-1 ml-5 text-left whitespace-nowrap text-[12px] font-semibold leading-5	text-[#98A2B2]" sidebar-toggle-item>Navigasyon</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <button type="button" class="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700 h-[40px] mt-[17px]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <img src={main} className='ml-[14px]'></img>
                  <button>
                    <span class="flex-1 ml-5 text-left whitespace-nowrap text-[12px] font-semibold leading-5	" onClick={yonlendir} sidebar-toggle-item>Anasayfa</span>
                  </button>
                </button>

                <button type="button" class="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700 mt-[18px]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                  <span class="flex-1 ml-5 text-left whitespace-nowrap text-[12px] font-semibold leading-5 text-[#98A2B2]" sidebar-toggle-item>Apps</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

                <button type="button" class="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-[58px] group h-[40px] mt-[17px] bg-[#37AA491A]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <img src={user} className='ml-[14px]'></img>
                  <span class="flex-1 ml-5 text-left whitespace-nowrap text-[12px] font-semibold leading-5 " sidebar-toggle-item>Kullanıcı İşlemleri</span>
                </button>


              </li>

            </ul>
          </div>


        </aside>

        <div className='w-[1512px] h-[32rem] ml-[352px] mt-[56px] relative overflow-x-auto overflow-auto scrollbar '>
          <div className='w-[1395px] h-[32rem] relative '>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-900 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3 ">
                    #
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Ad-Soyad
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    E-mail
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Telefon
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    Durum
                  </th>
                  <th scope="col" class="px-6 py-3 text-center">
                    İşlem
                  </th>
                </tr>
              </thead>
              <tbody>
                {renderUsers()}
              </tbody>
            </table>
          </div>
        </div>


      </body>

    </>
  )
}

export default KullaniciIslemleri