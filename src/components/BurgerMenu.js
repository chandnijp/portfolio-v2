export const BurgerMenu = ({ burgerMenuOpen }) => {
    const burgerOne = burgerMenuOpen ? 'rotate(45deg)' : 'rotate(0)'
    const burgerTwo = burgerMenuOpen ? { display: 'none' } : { display: 'block' }
    const burgerThree = burgerMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'

    return (
        <div className="burgerMenu">
            <div className='burger burger1' style={{ transform: burgerOne }}></div>
            <div className='burger burger2' style={burgerTwo}></div>
            <div className='burger burger3' style={{ transform: burgerThree }}></div>
        </div>
    )
}
