"use client";

import React from 'react'
import { MenuItem } from '../types';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import S from './menuMobile.module.scss'

interface MenuMobileProps {
    menus: MenuItem[];
}

const MenuMobile = ({ menus }: MenuMobileProps) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className={S.menu_container}>

            <Button className={S.button_menu} onClick={handleOpen} >
                <MenuIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={S.list_container}>
                    <button onClick={handleClose} className={S.close}><CancelIcon /></button>
                    <ul >
                        {menus.map((menu: any, index: any) => (
                            <li className={S.list} key={index}>
                                <a href={`${menu.rota}`} onClick={handleClose}>
                                    {menu.label}
                                </a>
                                {
                                    menu.submenus !== undefined && menu?.submenus?.length > 0 &&
                                    <ul className={S.ul_submenu}>
                                        {
                                            menu.submenus.map((submenu: any, key: number) => (

                                                <li className={`${S.list} ${S.sub_list}`} key={key}>

                                                    <a href={`${submenu.rota}`} onClick={handleClose}>

                                                        {submenu?.label}

                                                    </a>

                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </div>
    )
}

export default MenuMobile