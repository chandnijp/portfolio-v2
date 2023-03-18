export const BurgerMenu = ({ burgerMenuOpen, theme }) => {
    const burgerOne = burgerMenuOpen ? 'rotate(45deg)' : 'rotate(0)'
    const burgerTwo = burgerMenuOpen ? { display: 'none' } : { display: 'block' }
    const burgerThree = burgerMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'

    return (
        <div className="burgerMenu">
            <div className={`burger burger1 ${theme}Burger`} style={{ transform: burgerOne }}></div>
            <div className={`burger burger2 ${theme}Burger`} style={burgerTwo}></div>
            <div className={`burger burger3 ${theme}Burger`} style={{ transform: burgerThree }}></div>
        </div>
    )
}
