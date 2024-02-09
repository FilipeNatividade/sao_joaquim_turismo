type SubmenuItem = {
    label: string,
    rota: string
}

export type MenuItem = {
    label: string,
    rota: string,
    submenus?: SubmenuItem[]
}