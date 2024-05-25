import { useState, createElement } from 'react';
import ListElement from '../list/ListElement';
import Button from '../button/Button';
import LoginModal from '../modal/login/LoginModal';
import logo from '../../../logo.svg';
import './Header.css';


export default function Header() {
    // Работа с состоянием, чтобы реакт не считал элементы верстки статическими, а считал их реактивными. Является hook-ом.
    // useState должен использоваться только внутри компонента и на верхнем уровне (не в теле цикла или ветвления)
    // const stateArray = useState(0)
    // const loginCount = stateArray[0]  // Переданное в useState значение
    // const setLoginCount = stateArray[1]  // Функция, которая меняет данное значение
    let [loginCount, setLoginCount] = useState(0);

    let [LoginModalIsOpen, setLoginModalIsOpen] = useState(false);

    let loginButtonData = {
        name: "Login"
    }

    function handleLogin(info) {
        console.log(info);

        // content поменяется только после следующего render, так что его использование далее в теле этой функции невозмонжо
        setLoginCount((prevLoginCount) => (++prevLoginCount));
        setLoginModalIsOpen(true)
    }

    const ul = createElement(
        'ul',
        {key: 'ul'},
        [
            <ListElement key='logo' value={<img src={logo} className="Header-logo List-element" alt="logo" />} />,
            <ListElement key='Brand' className='List-element' value="BenefitBistro" />,
            <ListElement key='Counter' className='List-element' value={'Login clicked: ' + loginCount} />
        ]
    )

    return createElement(
        'header',
        {className: 'Header'},
        [
            ul,

            /* Использование второго типа синтекса через Children из React*/
            <Button
                key='Login-button'
                className='Login-button'
                onClick={() => handleLogin('Logging in')}
            >{loginButtonData}</ Button>,

            <LoginModal
                key='Login-modal'
                isOpen={LoginModalIsOpen}
                onModalClose={() => setLoginModalIsOpen(false)}
            />
        ]
    )
}
