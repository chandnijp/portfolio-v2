import css from './burgerMenu.module.css'

export const BurgerMenu = ({ burgerMenuOpen, theme }) => {
    const burgerOne = burgerMenuOpen ? 'rotate(45deg)' : 'rotate(0)'
    const burgerTwo = burgerMenuOpen ? { display: 'none' } : { display: 'block' }
    const burgerThree = burgerMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'

    return (
        <div className={css.burgerMenu}>
            <div className={`${css.burger} ${css.burger1} ${css[`${theme}Burger`]}`} style={{ transform: burgerOne }}></div>
            <div className={`${css.burger} ${css.burger2} ${css[`${theme}Burger`]}`} style={burgerTwo}></div>
            <div className={`${css.burger} ${css.burger3} ${css[`${theme}Burger`]}`} style={{ transform: burgerThree }}></div>
        </div>
    )
}
