"use client";

import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuItem as MenuItemType } from '../types';
import S from './menuDesktop.module.scss';

interface SubmenuProps {
  submenus: MenuItemType[];
  label: string
}

const Submenu: React.FC<SubmenuProps> = ({ submenus, label }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  

  useEffect(() => {
    let isScrollingDown = false;

    const handleScroll = () => {
      // Verifica se a página foi rolada para baixo
      if (!isScrollingDown && window.scrollY > 0) {
        handleClose();
        isScrollingDown = true;
      } else if (window.scrollY === 0) {
        isScrollingDown = false;
      }
    };

    // Adiciona um event listener para o evento de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div  className={S.submenu_box}>
      <button
        aria-controls="submenu"
        onClick={handleClick}
        className={S.button_submenu}>
        {label}
      </button>
      {typeof window !== 'undefined' && (
        <Menu
          id="submenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'submenu',
          }}
          className={S.menu_submenu} >
          {submenus.map((submenu) => (
            <MenuItem
              key={submenu.label}
              onClick={handleClose}

            >
              <a href={submenu.rota}
                className={S.button_submenu}
              >
                {submenu.label}
              </a>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};

interface MenuDesktopProps {
  menus: MenuItemType[];
}

const MenuDesktop = ({ menus }: MenuDesktopProps) => {
  return (
    <ul className={S.list_style}>
      {menus.map((item) => (
        <li key={item.label} >
          {item.submenus && item.submenus.length > 0 ? (
            <Submenu submenus={item.submenus} label={item.label} />

          ) : (
            <a className={S.button_submenu} href={item.rota} >{item.label}</a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenuDesktop