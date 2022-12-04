import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


// Маршрутизация
// Добавь маршрутизацию с библиотекой React Router.В приложении должно быть несколько страниц:

// /register - публичный маршрут регистрации нового пользователя с формой
// /login - публичный маршрут логина существующего пользователя с формой
// /contacts - приватный маршрут для работы со списком контактов пользователя

// Добавь компонент навигации Navigation со ссылками для перехода по маршрутам.

// Меню пользователя
// Создай компонент UserMenu, отображающий почту пользователя и кнопку выхода из учетной записи. Вот как может выглядеть его разметка.

//<div>
//  <p>mango@mail.com</p>
//  <button>Logout</button>
//</div>

// Стилизация
// Это финальная версия приложения, поэтому поработай над оформлением интерфейса.Можно использовать 
// библиотеку стилизации или компонентов, например Chakra UI или Material UI.